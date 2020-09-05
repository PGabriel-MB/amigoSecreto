import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { RequestApiProvider } from "../../providers/request-api/request-api";
import { InicioPage } from '../inicio/inicio';
import { ConvitesPage } from '../convites/convites';
import { VisualizarGrupoAceitoPage } from '../visualizar-grupo-aceito/visualizar-grupo-aceito';

@IonicPage()
@Component({
  selector: 'page-meus-grupos',
  templateUrl: 'meus-grupos.html',
})

export class MeusGruposPage {
  idUser: string;
  grupos: Array<any> = [];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public requestApi: RequestApiProvider,
      public modalCtrl: ModalController
    ) {
  }

  voltar() {
    this.navCtrl.setRoot(InicioPage);
  }

  ionViewDidEnter() {
    this.idUser = this.navParams.get('idUser');
    this.getGrupos();
  }

  getGrupos() {
    this.requestApi.requestGet('grupo/buscaAceites', { id: this.idUser }).then(async r => {
      this.grupos = await r.data;
    });
  }

  irParaListaConvites(){
    this.navCtrl.push(ConvitesPage, { idUser: this.idUser });
  }

  verInfosGrupo(grupo: any) {
    let modal = this.modalCtrl.create(VisualizarGrupoAceitoPage,  { grupo });
    modal.present();
  }

}
