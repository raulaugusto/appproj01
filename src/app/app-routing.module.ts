import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClientesComponent } from './views/cliente/cadastro-clientes/cadastro-clientes.component';

const routes: Routes = [
  {path:"cadastro-cliente", component: CadastroClientesComponent},
  {path:"cadastro-cliente/:id", component: CadastroClientesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
