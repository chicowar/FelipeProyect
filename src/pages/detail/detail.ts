import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public tarjetasService: TarjetasService) {
    this.imagen_de_perfil = navParams.get('imagen_de_perfil');
    this.id = navParams.get('id');
    if (this.id != 0){
      tarjetasService.getTarjeta(this.id)
            .valueChanges().subscribe(tarjeta => {
              this.tarjeta = tarjeta;
      });﻿

 tarjetasService.getImagen(this.id,this.imagen_de_perfil);

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

  deleteTarjeta()
  {
    this.tarjetasService.deleteTarjeta(this.tarjeta);
    alert('Nota Eliminada con exito');
    this.navCtrl.pop();
  }
}
