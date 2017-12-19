import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TarjetasService } from '../../services/tarjetas.service';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  tarjeta =  {};
  id=null;
  imagen_de_perfil=null;
  idlog="";
  constructor(public navCtrl: NavController, public navParams: NavParams, public tarjetasService: TarjetasService,public afAuth: AngularFireAuth, private alertCtrl: AlertController) {
    this.imagen_de_perfil = navParams.get('imagen_de_perfil');
    this.id = navParams.get('id');
    if (this.id != 0){
      tarjetasService.getTarjeta(this.id)
            .valueChanges().subscribe(tarjeta => {
              this.tarjeta = tarjeta;
              if(this.imagen_de_perfil != null){
                tarjetasService.getImagen2(this.id,this.imagen_de_perfil,'2',document.querySelector('#imgunit'));
              }
      });﻿

    }
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad DetailPage');
  }

  addTarjeta() {
    if (this.id !=0){
/*      // estamos ediantdo
      this.tarjetasService.editTarjeta(this.tarjeta);
      alert('Nota editada con exito');
    }else {
      this.tarjeta.id = Date.now();
      this.tarjetasService.createTarjeta(this.tarjeta);
      alert('Nota Creada con exito');*/
    }
      this.navCtrl.pop();
  }

  agregarcontacto() {

    if (this.id != 0){
      this.afAuth.authState.subscribe( user => {
        this.idlog=user.uid;

        this.tarjetasService.addcontacto(this.id,this.idlog);

    });
    let alert = this.alertCtrl.create({
      title: 'Confirmacion',
      subTitle: 'Contacto agregado correctamente',
      buttons: ['Aceptar']
    });
    alert.present();
    }
  }

  deleteTarjeta()
  {
    this.tarjetasService.deleteTarjeta(this.tarjeta);
    alert('Nota Eliminada con exito');
    this.navCtrl.pop();
  }
}
