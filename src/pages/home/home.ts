import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TarjetasService } from '../../services/tarjetas.service';
import { AngularFireAuth } from 'angularfire2/auth';

import { EnviadasPage } from '../enviadas/enviadas';
import { RecibidasPage } from '../recibidas/recibidas';
import { FavoritasPage } from '../favoritas/favoritas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tarjeta =  {};
  id="";
  constructor(public navCtrl: NavController, public tarjetasService: TarjetasService, afAuth: AngularFireAuth) {

    afAuth.authState.subscribe( user => {
      this.id=user.uid;

      if (this.id != '0'){
        tarjetasService.getTarjeta(this.id)
              .valueChanges().subscribe(tarjeta => {
                this.tarjeta = tarjeta;
                tarjetasService.getImagen(this.id,this.tarjeta,'1',document.querySelector('#imglog'));
                tarjetasService.getImagenCompany(this.id,this.tarjeta,'1',document.querySelector('#imglogcompany'));
        });﻿
      }

    });
  }

  enviadasdetail(){
    this.navCtrl.push(EnviadasPage);
  }

  Recibidasdetail(){
    this.navCtrl.push(RecibidasPage);
  }

  Favoritasdetail(){
    this.navCtrl.push(FavoritasPage);
  }


}
