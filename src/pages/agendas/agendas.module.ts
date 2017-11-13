import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendasPage } from './agendas';

@NgModule({
  declarations: [
    AgendasPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendasPage),
  ],
})
export class AgendasPageModule {}
