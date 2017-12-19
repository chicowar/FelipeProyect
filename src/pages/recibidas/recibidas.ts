import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TarjetasService } from '../../services/tarjetas.service';
import { DetailPage } from '../detail/detail';
/**
 * Generated class for the RecibidasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recibidas',
  templateUrl: 'recibidas.html',
})
export class RecibidasPage {
  public tarjetaslist:Array<any>;
  public cargatarjetasList:Array<any>;
  public searchQuery:any;
   @ViewChild('myNav') nav: NavController;
   /*
  constructor(public navCtrl: NavController, public tarjetasService : TarjetasService) {
    this.tarjetasService.getTarjetas().subscribe(lastarjetas=> {
        this.tarjetaslist = lastarjetas;
        this.cargatarjetasList = lastarjetas;
    });﻿

  }*/

  constructor(public navCtrl: NavController, public navParams: NavParams, public tarjetasService : TarjetasService) {

let tarjetaslist2 =[];

  this.tarjetasService.getTarjetasRecibidas(navParams.get('id'),(lastarjetas=> {

 tarjetaslist2.push(lastarjetas.val());

}));

this.tarjetaslist = tarjetaslist2
this.cargatarjetasList = tarjetaslist2

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecibidasPage');
  }


  public goToDetail(id,imagen_de_perfil) {

    this.navCtrl.push(DetailPage, {id: id,imagen_de_perfil: imagen_de_perfil});
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
