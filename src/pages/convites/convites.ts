import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestApiProvider } from '../../providers/request-api/request-api';
import { UtilsProvider } from '../../providers/utils/utils';
import { StorageProvider } from "../../providers/storage/storage";

@IonicPage()
@Component({
  selector: 'page-convites',
  templateUrl: 'convites.html',
})
export class ConvitesPage {

  idUser: any;
  convites: Array<any> = [];
  email: string;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public requestApi: RequestApiProvider,
      public strg: StorageProvider,
      public utils: UtilsProvider
    ) {
  }

  ionViewDidLoad() {
    this.strg.getUser().then(async r => {
      this.email = await r.email;
      this.getConvites();
    });

    this.idUser = this.navParams.get('idUser');
  } 


  async getConvites() {
    this.requestApi.requestGet('grupo/buscaConvites', { email: this.email }).then(async r => {
      this.convites = await r.data;
    });
  }

  aceitarConvite({ _id }){
    let body = {
      grupoId: _id,
      email: this.email
    }
    this.requestApi.requestPost('grupo/addConfirmacao', body).then(async r => {
      this.utils.presentToast('Convite aceito com Sucesso!');
      this.getConvites();
    });
  }

}
