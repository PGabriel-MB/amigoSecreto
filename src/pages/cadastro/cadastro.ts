import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RequestApiProvider } from '../../providers/request-api/request-api';

import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  nome: string = '';
  email: string = '';
  tamCamisa: string = '';
  tamCalca: string = '';
  tamCalcado: string = '';
  hobby: string = '';

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public requestApi: RequestApiProvider,
      public toastCtrl: ToastController
    ) {
      this.email = this.navParams.get('email');
  }
  
  valid(){
    if (this.nome &&
      this.email &&
      this.tamCamisa &&
      this.tamCalca &&
      this.tamCalcado &&
      this.hobby){

        let obj = {
          nome: this.nome,
          email: this.email,
          tamanhoCamisa: this.tamCamisa,
          tamanhoCalca: this.tamCalca,
          tamanhoSapato: this.tamCalcado,
          hobby: this.hobby
        }

        this.requestApi.requestPost('usuario/cadastro/', obj).then(r => {
          console.log('Cadastrou: ', r);
          this.navCtrl.setRoot(HomePage);
        });
      } else {
        let toast = this.toastCtrl.create({message: 'Verifique todos os campos', duration: 3000, position: 'top', cssClass: 'toastFormat'});
        toast.present();
      }
  }

  back(){
    this.navCtrl.setRoot(HomePage);
  }
}
