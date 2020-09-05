import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestApiProvider } from '../../providers/request-api/request-api';
import { UtilsProvider } from '../../providers/utils/utils';



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
      public utils: UtilsProvider
    ) {
  }

  ionViewDidLoad() {
    this.grupo = this.navParams.get('grupo');
  }

  enviarConvite() {
    if(this.emailUsuario){

      let body = {
        grupoId: this.grupo._id,
        email: this.emailUsuario
      }

      this.requestApi.requestPost('grupo/addUsuario', body).then(async r => {
        this.utils.presentToast('Convite enviado com sucesso!');
      });
    } else {
      this.utils.presentToast('Preencha o campo de E-mail!');
    }
  }

} 
