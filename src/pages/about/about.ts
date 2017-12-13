import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public afAuth: AngularFireAuth,private alertCtrl: AlertController) {

  }

  presentConfirm() {
  let alert = this.alertCtrl.create({
    title: 'Confirmación',
    message: '¿Realmente desea cerrar sesion?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'Cancelar',
        handler: () => {
          console.log('Cancelar clicked');
        }
      },
      {
        text: 'Confirmar',
        handler: () => {
          console.log('Sesion cerrada');
          this.logoutUser();
        }
      }
    ]
  });
  alert.present();
}



  logoutUser(){
    this.afAuth.auth.signOut();
    location.reload ();
  }
  

}
