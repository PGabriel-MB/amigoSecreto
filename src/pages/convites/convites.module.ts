import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConvitesPage } from './convites';

@NgModule({
  declarations: [
    ConvitesPage,
  ],
  imports: [
    IonicPageModule.forChild(ConvitesPage),
  ],
})
export class ConvitesPageModule {}
