import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { HabitatService } from '../habitat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginPage implements OnInit {
  //Declaration du formulaire et ajout des champs
  loginForm:FormGroup=new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submitted:boolean=false;

  constructor(
    public alertCtrl:AlertController,
    public formBuilder:FormBuilder,
    private habitatServ:HabitatService,

  ) { }

   async presentAlert(){
      const alert= await this.alertCtrl.create({
        message:"Connexion réussie"
      });
      await alert.present();
   }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public onSubmit(){
      this.submitted=true;
      if (this.loginForm.invalid) {
          return;
      }

      if (this.submitted) {
          let dataUser=new FormData();
          dataUser.append('email', this.loginForm.value.email);
          dataUser.append('password', this.loginForm.value.password);

          //send data
          this.habitatServ.loginUser(dataUser);

      }


  }

}
