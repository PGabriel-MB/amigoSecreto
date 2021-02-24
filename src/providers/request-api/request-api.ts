import { Injectable } from '@angular/core';
import axios from 'axios';


/*
  Generated class for the RequestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestApiProvider {

  url: string = 'https://friendzone-back.herokuapp.com/';
  constructor() {
  }
  async requestGet (rota: string, params: any): Promise<any>{
    let req = await axios({
      method: 'GET',
      url: this.url + rota,
      params
    }).then(async r => {
      return await r;
    });
    return await req;
  }

  async requestPost(rota: string, obj: any): Promise<any>{
    let req = await axios.post(this.url + rota, obj).then(async r => {
      
      console.log('Resposta', r);
      return await r;
    }).catch(erro => {

      console.log('Erro: ', erro);
    });
    return await req;
  }
}
