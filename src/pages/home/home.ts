import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TarjetasService } from '../../services/tarjetas.service';
import { AngularFireAuth } from 'angularfire2/auth';

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
        });﻿
      }

    });
  }

  enviadasdetail(){
    console.log('enviadasdetail');

  }

  Recibidasdetail(){
    console.log('Recibidasdetail');

  }


}
