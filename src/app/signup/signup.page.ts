import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { HabitatService } from '../habitat.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class SignupPage implements OnInit {

  //Declaration du formulaire et ajout des champs
  signupForm:FormGroup=new FormGroup({
    prenom: new FormControl(''),
    nom: new FormControl(''),
    tel: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submitted:boolean=false;

  constructor(
    public alertCtrl:AlertController,
    public formBuilder:FormBuilder,
    private habitatServ:HabitatService,
  ) { }

  get f(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }

  ngOnInit() {
    this.signupForm=this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(50)]],
    });
  }

  public onSubmit(){
    this.submitted=true;
    if (this.signupForm.invalid) {
        return;
    }

    if (this.submitted) {
        let dataUser=new FormData();
        dataUser.append('prenom', this.signupForm.value.prenom);
        dataUser.append('nom', this.signupForm.value.nom);
        dataUser.append('tel', this.signupForm.value.tel);
        dataUser.append('email', this.signupForm.value.email);
        dataUser.append('password', this.signupForm.value.password);

        //send data
        this.habitatServ.signupUser(dataUser);
    }


}


}
