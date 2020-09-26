import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestApiProvider } from '../../providers/request-api/request-api';
import { StorageProvider } from '../../providers/storage/storage';
import { UtilsProvider } from '../../providers/utils/utils';



@IonicPage()
@Component({
  selector: 'page-informacoes-grupo',
  templateUrl: 'informacoes-grupo.html',
})
export class InformacoesGrupoPage {
  grupo: any;
  emailUsuario: string;
  meuAmigo: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public requestApi: RequestApiProvider,
    public utils: UtilsProvider,
    public strg: StorageProvider
  ) {
  }

  ionViewDidLoad() {
    this.grupo = this.navParams.get('grupo');

    if(this.grupo.foiSorteado) {
      this.filtrarAmigo(this.grupo);
    }
  }

  enviarConvite() {
    if (this.emailUsuario) {

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

  async filtrarAmigo(grupo: any) {
    let user;
    await this.strg.getUser().then( u  => {
      user = u;
    });

    let resultado = grupo.sorteados.filter(sorteado => {
      if(sorteado.entrega) {
        return sorteado.entrega._id === user._id;
      }
    });

    this.meuAmigo = await resultado[0].recebe
  }


  // getSorteado(grupo){
  //   let id = this.user._id;
  //   let filter = grupo.sorteados.filter(sorteado => {
  //     if (sorteado.entrega) {
  //       return sorteado.entrega._id === id
  //     }
  //   })
  //   return filter[0].recebe
  // }

  sortear(grupo: any) {
    this.requestApi.requestGet('grupo/sortear', { grupoId: grupo._id }).then(async r => {
      this.utils.presentToast('Grupo sorteado com sucesso!');
    });
  }

} 
