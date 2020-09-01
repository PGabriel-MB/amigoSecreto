import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';

import { RequestApiProvider } from "../../providers/request-api/request-api";
import { StorageProvider } from "../../providers/storage/storage";

import { ModalCadastroGrupoPage } from "../modal-cadastro-grupo/modal-cadastro-grupo";
import { HomePage } from '../home/home';
import { MeusGruposPage } from '../meus-grupos/meus-grupos';
import { InformacoesGrupoPage } from '../informacoes-grupo/informacoes-grupo';

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
      public modalCtrl: ModalController,
      public toastCtrl: ToastController
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
       this.grupos = await r.data;
    });
  }

  showModalCadGrupo(){
    let modal = this.modalCtrl.create(ModalCadastroGrupoPage, { idUser: this.user._id });
    modal.onDidDismiss((teste) => {
      let toast = this.toastCtrl.create({message: 'Grupo cadastrado com sucesso!', duration: 3000, position: 'top', cssClass: 'toastFormat'});
      if (teste) {
        toast.present();
      }
    });
    modal.present();
  }

  logOut() {
    this.strg.clearUser();
    this.navCtrl.setRoot(HomePage);
  }

  meusGrupos() {
    this.navCtrl.setRoot(MeusGruposPage, { idUser: this.user._id });
  }

  informacoesGrupo(grupo: any){
    this.navCtrl.push(InformacoesGrupoPage, { grupo })
  }
}
