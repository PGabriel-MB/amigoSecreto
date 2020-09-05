import { Injectable } from '@angular/core';

import { ToastController } from "ionic-angular";

@Injectable()
export class UtilsProvider {

  constructor(private toastCtrl: ToastController) {
  }

  presentToast(message: string){
    let toast = this.toastCtrl.create({ message, duration: 3000, position: 'top', cssClass: 'toastFormat'});
    toast.present();
  }

}
