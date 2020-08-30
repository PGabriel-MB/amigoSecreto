import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalCadastroGrupoPage } from './modal-cadastro-grupo';

@NgModule({
  declarations: [
    ModalCadastroGrupoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalCadastroGrupoPage),
  ],
})
export class ModalCadastroGrupoPageModule {}
