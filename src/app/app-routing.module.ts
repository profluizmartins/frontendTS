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


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "bibliotecas", component: BibliotecaListComponent},
  { path: "bibliotecas/form", component: BibliotecaFormComponent},
  { path: "cidades", component: CidadeListComponent},
  { path: "cidades/form", component: CidadeFormComponent},
  { path: "exemplos", component: DiretivasComponent},
  { path: "cidades/update/:id", component: CidadeUpdateComponent},
  { path: "bibliotecas/update/:id", component: BibliotecaUpdateComponent}
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
