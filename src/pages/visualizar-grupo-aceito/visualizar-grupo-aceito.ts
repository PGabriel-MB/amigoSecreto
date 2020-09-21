import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Grupo } from "../../models/grupo";

@IonicPage()
@Component({
  selector: 'page-visualizar-grupo-aceito',
  templateUrl: 'visualizar-grupo-aceito.html',
})
export class VisualizarGrupoAceitoPage {

  grupo: Grupo = null;
  dataEntrega: Date = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewWillLoad() {
    this.grupo = this.navParams.get('grupo');
  }
  
  ionViewDidEnter(){
    console.log('grupo', this.grupo)
  }

  ok() {
    this.viewCtrl.dismiss();
  }
}
