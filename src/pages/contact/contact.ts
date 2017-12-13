import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TarjetasService } from '../../services/tarjetas.service';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public tarjetaslist:Array<any>;
  public cargatarjetasList:Array<any>;
  public busquedaslista:any;
  public searchQuery:any;

   @ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController, public tarjetasService : TarjetasService) {

    this.tarjetasService.getTarjetas().subscribe(lastarjetas=> {
        this.tarjetaslist = lastarjetas;
        this.cargatarjetasList = lastarjetas;
    });﻿

    this.busquedaslista = "publica";
  }

public goToDetail(id,imagen_de_perfil) {

  this.navCtrl.push(DetailPage, {id: id,imagen_de_perfil: imagen_de_perfil});
}


public createContact() {

  this.navCtrl.push(DetailPage, {id: 0});
}

public selectedPublicos() {
  this.tarjetasService.getTarjetas().subscribe(lastarjetas=> {
      this.tarjetaslist = lastarjetas;
      this.cargatarjetasList = lastarjetas;
  });﻿

  this.searchQuery = '';
}

public selectedContactos() {
  this.tarjetaslist = [];
  this.cargatarjetasList = [];
  this.searchQuery = '';
}

getItems(searchbar) {
  // Reset items back to all of the items
  this.tarjetaslist = this.cargatarjetasList;

  // set q to the value of the searchbar
  var q = searchbar.srcElement.value;

  // if the value is an empty string don't filter the items
  if (!q) {
    return;
  }

  this.tarjetaslist = this.tarjetaslist.filter((v) => {
  if(v.username && q) {
    if (v.username.toLowerCase().indexOf(q.toLowerCase()) > -1) {
      return true;
    }
    if (v.puesto.toLowerCase().indexOf(q.toLowerCase()) > -1) {
      return true;
    }
    return false;
  }
});

}

}
