import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public afAuth: AngularFireAuth) {

  }

  logoutUser(){
    this.afAuth.auth.signOut();

    location.reload ();
  }

}
