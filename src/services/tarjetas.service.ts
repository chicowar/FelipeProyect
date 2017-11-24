import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class TarjetasService {
  constructor(public afDB: AngularFireDatabase){}
  tarjetas = [];


public getTarjetas(){
  console.log(this.afDB.list("usuarios/").valueChanges());
  return this.afDB.list("usuarios/").valueChanges();
  //return this.tarjetas;
}


public getImagen(id,imagen_de_perfil,identificador){
  // Create a reference with an initial file path and name
  var storage = firebase.storage();
  // Points to the root reference
  //var storageRef = firebase.storage().ref();

  var storageRef = storage.refFromURL('gs://felipe-29121.appspot.com/')

  // Points to 'images'
  var imagesRef = storageRef.child('usuarios');

  // Points to 'uid'
  // Note that you can use variables to create child values
  var uidRef = imagesRef.child(id);

  // Points to 'file'
  // Note that you can use variables to create child values
  var fullRef = uidRef.child(imagen_de_perfil);


  fullRef.getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'
    var test = url;
    if(identificador == '1'){
      document.querySelector('#imglog').src = test;
    }else{
      document.querySelector('#imgunit').src = test;
    }


  }).catch(function(error) {
    // Handle any errors
  });
/*
  // File path is 'images/space.jpg'
  var path = fullRef.fullPath

  // File name is 'space.jpg'
  var name = fullRef.name

  return path;
  //return this.tarjetas;
  */
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
