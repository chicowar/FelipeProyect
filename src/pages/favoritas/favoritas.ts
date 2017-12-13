import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TarjetasService } from '../../services/tarjetas.service';
import { DetailPage } from '../detail/detail';
/**
 * Generated class for the FavoritasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritas',
  templateUrl: 'favoritas.html',
})
export class FavoritasPage {
  public tarjetaslist:Array<any>;
  public cargatarjetasList:Array<any>;
  public searchQuery:any;
     @ViewChild('myNav') nav: NavController;
    constructor(public navCtrl: NavController, public tarjetasService : TarjetasService) {
      this.tarjetasService.getTarjetas().subscribe(lastarjetas=> {
          this.tarjetaslist = lastarjetas;
          this.cargatarjetasList = lastarjetas;
      });﻿

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritasPage');
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
