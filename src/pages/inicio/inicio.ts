import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { RequestApiProvider } from "../../providers/request-api/request-api";
import { StorageProvider } from "../../providers/storage/storage";

import { ModalCadastroGrupoPage } from "../modal-cadastro-grupo/modal-cadastro-grupo";

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface Usuario {
  email: string,
  hobby: string,
  nome: string,
  tamanhoCalca: string,
  tamanhoCamisa: string,
  tamanhoSapato: Number,
  _id: string
}


@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  user: Usuario = null;
  grupos: Array<any> = [];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public strg: StorageProvider,
      public requestApi: RequestApiProvider,
      public modalCtrl: ModalController
    ) {
    
  }

  ionViewWillLoad() {
    this.strg.getUser().then(async r => {
      this.user = await r;

      this.getGrupos();
    });
  }

  getGrupos() {
    this.requestApi.requestGet('grupo/busca/', { id: this.user._id }).then(async r => {
      console.log('GRUPOS', await r);
    });
  }

  showModalCadGrupo(){
    let modal = this.modalCtrl.create(ModalCadastroGrupoPage, { idUser: this.user._id });
    modal.onDidDismiss(() => {
      // mostrar um aviso de cadastro de grupo
      // realizado com sucesso!
    });
    modal.present();
  }
}
