import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnviadasPage } from './enviadas';

@NgModule({
  declarations: [
    EnviadasPage,
  ],
  imports: [
    IonicPageModule.forChild(EnviadasPage),
  ],
})
export class EnviadasPageModule {}
