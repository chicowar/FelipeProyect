import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TarjetasService } from '../../services/tarjetas.service';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  tarjetas = [];
   @ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController, public tarjetasService : TarjetasService) {
    this.tarjetasService.getTarjetas().subscribe(tarjetas=> {
            this.tarjetas=tarjetas;
        });﻿
  
  }

public goToDetail(id,imagen_de_perfil) {

  this.navCtrl.push(DetailPage, {id: id,imagen_de_perfil: imagen_de_perfil});
}


public createContact() {

  this.navCtrl.push(DetailPage, {id: 0});
}


}
