import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-visite',
  templateUrl: './visite.page.html',
  styleUrls: ['./visite.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VisitePage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  token=localStorage.getItem('token');

  public godetails(fleur:string):void{
      localStorage.setItem("token",fleur);
      this.navCtrl.navigateForward("/details")
  }
}
