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
  imagen_de_perfil="";
  constructor(public navCtrl: NavController, public tarjetasService: TarjetasService, afAuth: AngularFireAuth) {

    const authObserver = afAuth.authState.subscribe( user => {
      this.id=user.uid;

      if (this.id != 0){
        tarjetasService.getTarjeta(this.id)
              .valueChanges().subscribe(tarjeta => {
                this.tarjeta = tarjeta;
                this.imagen_de_perfil = this.tarjeta.imagen_de_perfil;
                tarjetasService.getImagen(this.id,this.imagen_de_perfil,'1');
        });﻿
      }

    });
  }

}
