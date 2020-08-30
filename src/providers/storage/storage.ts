import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  storage: Storage = new Storage({
    name: 'deviceStorage',
    driverOrder: ["indexeddb", "sqlite", "websql"]
  });

  constructor() {
    console.log('Hello StorageProvider Provider');
  }

  saveUser(user: any){
    this.storage.set('user', user);
  }

  getUser(){
    return this.storage.get('user');
  }

  clearUser(){
    this.storage.clear();
  }
}
