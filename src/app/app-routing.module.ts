import { AutenticacaoGuard } from './guard/autenticacao.guard';
import { MainComponent } from './component/autenticacao/main/main.component';
import { CadastroComponent } from './component/autenticacao/cadastro/cadastro.component';
import { LoginComponent } from './component/autenticacao/login/login.component';
import { BibliotecaUpdateComponent } from './component/view/biblioteca/biblioteca-update/biblioteca-update.component';
import { CidadeUpdateComponent } from './component/view/cidade/cidade-update/cidade-update.component';
import { DiretivasComponent } from './exemples/diretivas/diretivas.component';
import { CidadeFormComponent } from './component/view/cidade/cidade-form/cidade-form.component';
import { CidadeListComponent } from './component/view/cidade/cidade-list/cidade-list.component';
import { BibliotecaFormComponent } from './component/view/biblioteca/biblioteca-form/biblioteca-form.component';
import { BibliotecaListComponent } from './component/view/biblioteca/biblioteca-list/biblioteca-list.component';
import { HomeComponent } from './component/view/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListComponent } from './component/view/usuario/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './component/view/usuario/usuario-form/usuario-form.component';
import { UsuarioUpdateComponent } from './component/view/usuario/usuario-update/usuario-update.component';


const routes: Routes = [
  { path: "", 
  component: HomeComponent,
  children:  [
    { path: "bibliotecas", component: BibliotecaListComponent},
    { path: "bibliotecas/form", component: BibliotecaFormComponent},
    { path: "cidades", component: CidadeListComponent},
    { path: "cidades/form", component: CidadeFormComponent},
    { path: "exemplos", component: DiretivasComponent},
    { path: "cidades/update/:id", component: CidadeUpdateComponent},
    { path: "bibliotecas/update/:id", component: BibliotecaUpdateComponent},
    { path: "usuarios", component: UsuarioListComponent },
    { path: "usuarios/form", component: UsuarioFormComponent },
    { path: "usuarios/update/:id", component: UsuarioUpdateComponent },
  ],
  canActivate: [AutenticacaoGuard]
},
{
  path: "",
  component: MainComponent,
  children: [
    { path: "", redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'cadatro', component: CadastroComponent}
  ]

}
,
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
