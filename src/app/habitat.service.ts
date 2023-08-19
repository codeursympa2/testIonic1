import { Injectable } from '@angular/core';
import { AlertController,NavController,ToastController,LoadingController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HabitatService {

  constructor(
    private http:HttpClient,
    public navCtrl:NavController,
    public alertCtrl:AlertController,
    public toast:ToastController,
    public loading:LoadingController

  ) {}

  public loginUser(donneesUser:any){
    this.http.post('http://localhost:80/api_senfleur/senfleurIdentification.php',donneesUser)
    .subscribe((res:any) => {
      if (res.success == true) {

        //get data
          const token=res.id_user;
          const token_prenom=res.prenom;
          const token_nom=res.nom;
          const token_email=res.email;
          const token_tel=res.tel;

        //store data to localstorage
        localStorage.setItem("token",token);
        localStorage.setItem("token_prenom",token_prenom);
        localStorage.setItem("token_nom",token_nom);
        localStorage.setItem("token_email",token_email);
        localStorage.setItem("token_tel",token_tel);

        //
        this.loading.dismiss();

        //redirect
        this.navCtrl.navigateRoot(['/home']);
        //message
        this.loading.dismiss();
        this.toast.create({
           message: "Connexion réussie.",
           duration: 5000,
        }).then((toast) => {
          toast.present();})

      }else{
       
        this.loading.dismiss();
        this.toast.create({
           message: "Identifiant ou mot de passe invalide.",
           duration: 5000
        }).then((toast) => {
          toast.present();})
      }

    });
  }

  public signupUser(donneesUser:any){
    this.http.post('http://localhost:80/api_senfleur/senfleurInscription.php',donneesUser)
   .subscribe((res:any) => {
     if (res.success === true) {

       //
       this.loading.dismiss();

       //redirect
       this.navCtrl.navigateRoot(['/login']);
       //message

       this.toast.create({
          message: res.data,
          duration: 5000
       }).then((toast) => {
        toast.present();})

     }else{
       this.loading.dismiss();
       this.toast.create({
          message: "Erreur inscription annulée."+ res.message,
          duration: 5000
       }).then((toast) => {
        toast.present();})
     }

   });
 }
}
