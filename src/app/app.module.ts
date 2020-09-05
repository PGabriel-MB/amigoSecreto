import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { InicioPage } from '../pages/inicio/inicio';

import { RequestApiProvider } from '../providers/request-api/request-api';
import { StorageProvider } from '../providers/storage/storage';

import { IonicStorageModule } from "@ionic/storage";
import { ModalCadastroGrupoPage } from '../pages/modal-cadastro-grupo/modal-cadastro-grupo';
import { MeusGruposPage } from '../pages/meus-grupos/meus-grupos';
import { InformacoesGrupoPage } from '../pages/informacoes-grupo/informacoes-grupo';
import { ConvitesPage } from '../pages/convites/convites';
import { UtilsProvider } from '../providers/utils/utils';
import { VisualizarGrupoAceitoPage } from '../pages/visualizar-grupo-aceito/visualizar-grupo-aceito';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPage,
    InicioPage,
    ModalCadastroGrupoPage,
    MeusGruposPage,
    InformacoesGrupoPage,
    ConvitesPage,
    VisualizarGrupoAceitoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'deviceStorage',
      driverOrder: ["indexeddb", "sqlite", "websql"]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPage,
    InicioPage,
    ModalCadastroGrupoPage,
    MeusGruposPage,
    InformacoesGrupoPage,
    ConvitesPage,
    VisualizarGrupoAceitoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RequestApiProvider,
    StorageProvider,
    UtilsProvider
  ]
})
export class AppModule {}
