import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toast, ToastController } from 'ionic-angular';
import { RequestApiProvider } from '../../providers/request-api/request-api';



@IonicPage()
@Component({
  selector: 'page-informacoes-grupo',
  templateUrl: 'informacoes-grupo.html',
})
export class InformacoesGrupoPage {
  grupo: any;
  emailUsuario: string

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public requestApi: RequestApiProvider,
      public toastCtrl: ToastController
    ) {
  }

  ionViewDidLoad() {
    this.grupo = this.navParams.get('grupo');
  }

  enviarConvite() {
    if(this.emailUsuario){
      
    } else {
      let toast = this.toastCtrl.create({message: 'Preencha o campo de E-mail!', duration: 3000, position: 'top', cssClass: 'toastFormat'});
      toast.present();
    }
  }
} 
