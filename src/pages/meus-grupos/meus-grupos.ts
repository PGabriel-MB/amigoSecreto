import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestApiProvider } from "../../providers/request-api/request-api";

@IonicPage()
@Component({
  selector: 'page-meus-grupos',
  templateUrl: 'meus-grupos.html',
})
export class MeusGruposPage {
  idUser: string;
  grupos: Array<any> = [
    'Grupo 1',
    'a gig freela',
    'network da pyPró',
    'faculdade TI'
  ];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public requestApi: RequestApiProvider
    ) {
  }

  ionViewDidLoad() {
    this.idUser = this.navParams.get('idUser');

    this.getGrupos();
  }

  getGrupos() {
    this.requestApi.requestGet('grupo/buscaAceites', { id: this.idUser }).then(async r => {
      //this.grupos = await r.data;
    });
  }

  irParaListaConvites(){

  }

}
