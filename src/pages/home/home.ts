import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RequestApiProvider } from "../../providers/request-api/request-api";
import { CadastroPage } from "../cadastro/cadastro";

import { StorageProvider } from "../../providers/storage/storage";
import { InicioPage } from '../inicio/inicio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // declaração de variáveis
  email: string = '';

  constructor(
    public navCtrl: NavController, 
    public requestApi: RequestApiProvider,
    public strg: StorageProvider) {
  
  }
  
  ionViewDidEnter() {
    this.strg.getUser().then(r => {
      if(r){
        this.email = r.email;
        this.enviar();
      }
    });
  }

  enviar(){
    if(this.email) {
      this.requestApi.requestGet('usuario/busca', { email: this.email}).then(async r => {
        if(await r.data.length == 0) {
          this.navCtrl.setRoot(CadastroPage, {email: this.email});
        } else {
          this.strg.saveUser(r.data[0]);
          this.navCtrl.setRoot(InicioPage);
        }
      });
    }
  }
}
