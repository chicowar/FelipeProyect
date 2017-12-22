import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';


@Injectable()
export class TarjetasService {
  constructor(public afDB: AngularFireDatabase){}
  tarjetas = [];

public getTarjetas(){
  return this.afDB.list("usuarios/").valueChanges();
  /*Otras forma
      this.countryRef = firebase.database().ref('/countries');
      this.countryRef.on('value', countryList => {
      let countries = [];
      countryList.forEach( country => {
        countries.push(country.val());
        return false;
      });

      this.countryList = countries;
      this.loadedCountryList = countries;
    });
    return this.countries;
  */
}


public getImagen(id,imagen_de_perfil,identificador,inputhtml){
  // Create a reference with an initial file path and name
  var storage = firebase.storage();
  // Points to the root reference
  //var storageRef = firebase.storage().ref();

  var storageRef = storage.refFromURL('gs://felipe-29121.appspot.com/')

  // Points to 'images'
  var imagesRef = storageRef.child('usuarios');

  // Points to 'uid'
  var uidRef
  // Note that you can use variables to create child values
  if (imagen_de_perfil.imagen_de_perfil){
    uidRef = imagesRef.child(id);
  }else{
    uidRef = imagesRef.child('default');
  }

  // Points to 'file'
  // Note that you can use variables to create child values
  var fullRef = uidRef.child(imagen_de_perfil.imagen_de_perfil||'default.png');
  fullRef.getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'
    var test = url;
    inputhtml.src = test;


  }).catch(function(error) {
    uidRef = imagesRef.child('default/default.png');
    uidRef.getDownloadURL().then(function(url) {
      // `url` is the download URL for 'images/stars.jpg'
      var test = url;
      inputhtml.src = test;


    }).catch(function(error) {

    });

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

public getImagenCompany(id,imagen_de_perfil,identificador,inputhtml){
  // Create a reference with an initial file path and name
  var storage = firebase.storage();
  var storageRef = storage.refFromURL('gs://felipe-29121.appspot.com/')
  // Points to 'images'
  var imagesRef = storageRef.child('Empresa');

  var uidRef = imagesRef.child(imagen_de_perfil.empresauid ||'default');
  var namearchivo = "";
  const rootRef = firebase.database().ref();
  const usuariosRef = rootRef.child('Empresa/');
  var empresa = usuariosRef.child(imagen_de_perfil.empresauid ||'default');
    empresa.once('value').then(function(snapshot) {
    namearchivo = (snapshot.val() && snapshot.val().archivo) || '';
    if(namearchivo != ''){
      var fullRef = uidRef.child(namearchivo);
      fullRef.getDownloadURL().then(function(url) {
        // `url` is the download URL for 'images/stars.jpg'
        var test = url;
        inputhtml.src = test;


      }).catch(function(error) {
        uidRef = imagesRef.child('default/companyDefault.png');
        uidRef.getDownloadURL().then(function(url) {
          // `url` is the download URL for 'images/stars.jpg'
          var test = url;
          inputhtml.src = test;


        }).catch(function(error) {

        });
        // Handle any errors
      });

    }else{
      uidRef = imagesRef.child('default/companyDefault.png');
      uidRef.getDownloadURL().then(function(url) {
        // `url` is the download URL for 'images/stars.jpg'
        var test = url;
        inputhtml.src = test;


      }).catch(function(error) {

      });
    }

  });

}

public getImagen2(id,imagen_de_perfil,identificador,inputhtml){
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
    inputhtml.src = test;


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

public addcontacto(id,iduser){
  this.afDB.database.ref("interacciones/recibidas/"+iduser).update({[id]:id});
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


public getTarjetasEnviadas(uid,cb){


  const rootRef = firebase.database().ref();
  const enviadasRef = rootRef.child('interacciones/enviadas');
  const usuariosRef = rootRef.child('usuarios');

  enviadasRef.child(uid).on('child_added',snap => {
         let usuarioRef = usuariosRef.child(snap.key);
          usuarioRef.once('value',cb).then(usuariosnap =>{
  /*          let tarjetaslist = [];
            usuariosnap.forEach(function(childSnapshot) {
              tarjetaslist.push(childSnapshot.val()); //or snap.val().name if you just want the name and not the whole object

              return false;
            });*/
           });
         });
}


public getTarjetasRecibidas(uid,cb){


  const rootRef = firebase.database().ref();
  const enviadasRef = rootRef.child('interacciones/recibidas');
  const usuariosRef = rootRef.child('usuarios');

  enviadasRef.child(uid).on('child_added',snap => {
         let usuarioRef = usuariosRef.child(snap.key);
          usuarioRef.once('value',cb).then(usuariosnap =>{
  /*          let tarjetaslist = [];
            usuariosnap.forEach(function(childSnapshot) {
              tarjetaslist.push(childSnapshot.val()); //or snap.val().name if you just want the name and not the whole object

              return false;
            });*/
           });
         });
}


public getTarjetasFavoritas(uid,cb){


  const rootRef = firebase.database().ref();
  const enviadasRef = rootRef.child('interacciones/favoritos');
  const usuariosRef = rootRef.child('usuarios');

  enviadasRef.child(uid).on('child_added',snap => {
         let usuarioRef = usuariosRef.child(snap.key);
          usuarioRef.once('value',cb).then(usuariosnap =>{
  /*          let tarjetaslist = [];
            usuariosnap.forEach(function(childSnapshot) {
              tarjetaslist.push(childSnapshot.val()); //or snap.val().name if you just want the name and not the whole object

              return false;
            });*/
           });
         });
}


}
