import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TarjetasService {
  constructor(public afDB: AngularFireDatabase){}
  tarjetas = [];



public getTarjetas(){

  return this.afDB.list("usuarios/").valueChanges();
  //return this.tarjetas;
}


public getImagenes(){

  return this.afDB.list("usuarios/").valueChanges();
  //return this.tarjetas;
}

public getTarjeta(id){
  return this.afDB.object("usuarios/"+id);
    // return this.tarjetas.filter(function(e, i){ return e.id == id })[0] || {email:null, empresauid:null, id:null, imagen_de_perfil:null, lat:null, lng:null,  phone:null, puesto:null, ubicacion:null, username:null};
}

public createTarjeta(tarjeta){
  this.afDB.database.ref("usuarios/"+tarjeta.id).set(tarjeta);
  //this.tarjetas.push(tarjeta);
}

public editTarjeta(tarjeta){
  this.afDB.database.ref("usuarios/"+tarjeta.id).set(tarjeta);
/*  for(let i = 0; i < this.tarjetas.length; i++) {
     if(this.tarjetas[i].id == tarjeta.id){
       this.tarjetas[i] = tarjeta;
     }
  }*/
}

public deleteTarjeta(tarjeta){
  this.afDB.database.ref("usuarios/"+tarjeta.id).remove(tarjeta);
  /*for(let i = 0; i < this.tarjetas.length; i++) {
     if(this.tarjetas[i].id == tarjeta.id){
       this.tarjetas.splice(i, 1);
     }
  }*/
}

}
