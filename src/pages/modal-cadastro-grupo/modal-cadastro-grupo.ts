import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { RequestApiProvider } from "../../providers/request-api/request-api";

/**
 * Generated class for the ModalCadastroGrupoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-cadastro-grupo',
  templateUrl: 'modal-cadastro-grupo.html',
})
export class ModalCadastroGrupoPage {
  idUser: string = '';
  nomeGrupo: string = '';
  dataEntrega: Date;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public viewCtrl: ViewController,
      public requestApi: RequestApiProvider
    ) {
  }

  ionViewDidLoad() {
    this.idUser = this.navParams.get('idUser');
  }

  cadastrarGrupo(){
    let objGrupo = {
      nome: this.nomeGrupo,
      dataEntrega: this.dataEntrega,
      usuario: this.idUser
    }

    this.requestApi.requestPost('grupo/cadastro', objGrupo).then(async r => {
      if(await r.status === 200){
        console.log('FOI FILHAO!!', r);
        this.fecharModal();
      }
    });
  }

  fecharModal() {
    this.viewCtrl.dismiss()
  }

}
