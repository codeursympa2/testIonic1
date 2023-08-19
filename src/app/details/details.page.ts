import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetailsPage implements OnInit {

  token:any;
  token_fl:any;
  fleurListe=[
    {"id":"Fl_rouge","desc":"Ici vous trouverez des fleurs rouges recoltées dans les 24h. Nous avons un service de livraison spécial permettant à nos clients de posseder de leur commande de manière instantanée","imgUrl":"../../assets/fleur-rouge.jpg"},
    {"id":"Fl_blanche","desc":"Ici vous trouverez des fleurs blanches recoltées dans les 24h. Nous avons un service de livraison spécial permettant à nos clients de posseder de leur commande de manière instantanée","imgUrl":"../../assets/fleur-blanche.jpg"},
  ]

  constructor(private ctrlNav:NavController) { }

  ngOnInit() {
    this.token=localStorage.getItem('token');
    this.token_fl=localStorage.getItem('token_fl');
  }

}
