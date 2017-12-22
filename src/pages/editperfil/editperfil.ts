import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TarjetasService } from '../../services/tarjetas.service';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the EditperfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editperfil',
  templateUrl: 'editperfil.html',
})
export class EditperfilPage {
  tarjeta =  {};
  id="";
  uid="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public tarjetasService: TarjetasService,public afAuth: AngularFireAuth, private alertCtrl: AlertController, public afDB: AngularFireDatabase) {
    afAuth.authState.subscribe( user => {
      this.id=user.uid;

      if (this.id != '0'){
        tarjetasService.getTarjeta(this.id)
              .valueChanges().subscribe(tarjeta => {
                this.tarjeta = tarjeta;
                this.uid = this.id;
                tarjetasService.getImagen(this.id,this.tarjeta,'1',document.querySelector('#imglogedit'));
                tarjetasService.getImagenCompany(this.id,this.tarjeta,'1',document.querySelector('#imglogcompanyedit'));
        });﻿
      }

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditperfilPage');
  }

  EditTarjeta() {
    if (this.id != '0'){
        this.afDB.database.ref("usuarios/"+this.id).set(this.tarjeta);
    let alert = this.alertCtrl.create({
      title: 'Confirmacion',
      subTitle: 'Perfil Editado correctamente',
      buttons: ['Aceptar']
    });
    alert.present();
    }
  }

}
