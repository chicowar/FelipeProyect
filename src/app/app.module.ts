import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ResitroPage } from '../pages/resitro/resitro';
import { MapPage } from '../pages/map/map';
import { LoginPage } from '../pages/login/login';
import { TarjetasService } from '../services/tarjetas.service';
import { DetailPage } from '../pages/detail/detail'
import { AgendasPage } from '../pages/agendas/agendas';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';



export const firebaseConfig = {
  apiKey: "AIzaSyD7fnd4lstP7klHMW8kpGFAtI0iYWWcodg",
  authDomain: "felipe-29121.firebaseapp.com",
  databaseURL: "https://felipe-29121.firebaseio.com",
  projectId: "felipe-29121",
  storageBucket: "felipe-29121.appspot.com",
  messagingSenderId: "428661649011"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ResitroPage,
    LoginPage,
    MapPage,
    TabsPage,
    DetailPage
    AgendasPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ResitroPage,
    LoginPage,
    MapPage,
    TabsPage,
    DetailPage
    AgendasPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
     TarjetasService
  ]
})
export class AppModule {}
