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
  uid="";

  constructor(public navCtrl: NavController, public tarjetasService: TarjetasService, afAuth: AngularFireAuth) {

    afAuth.authState.subscribe( user => {
      this.id=user.uid;

      if (this.id != '0'){
        tarjetasService.getTarjeta(this.id)
              .valueChanges().subscribe(tarjeta => {
                this.tarjeta = tarjeta;
                this.uid = this.id;
                tarjetasService.getImagen(this.id,this.tarjeta,'1',document.querySelector('#imglog'));
        });﻿
      }

    });
  }

  enviadasList(id){
    this.navCtrl.push(EnviadasPage, {id: id});
  }

  recibidasList(id){
    this.navCtrl.push(RecibidasPage, {id: id});
  }

  favoritasList(id){
    this.navCtrl.push(FavoritasPage, {id: id});
  }


}
