import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/template/header/header.component';
import { FooterComponent } from './component/template/footer/footer.component';
import { SidenavComponent } from './component/template/sidenav/sidenav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { BibliotecaListComponent } from './component/view/biblioteca/biblioteca-list/biblioteca-list.component';
import { BibliotecaFormComponent } from './component/view/biblioteca/biblioteca-form/biblioteca-form.component';
import { CidadeListComponent } from './component/view/cidade/cidade-list/cidade-list.component';
import { CidadeFormComponent } from './component/view/cidade/cidade-form/cidade-form.component';
import { HomeComponent } from './component/view/home/home.component';

import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RedDirective } from './diretives/red.directive';
import { DiretivasComponent } from './exemples/diretivas/diretivas.component';
import { ParaDirective } from './diretives/para.directive';
import { CidadeTableComponent } from './component/view/cidade/cidade-table/cidade-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CidadeUpdateComponent } from './component/view/cidade/cidade-update/cidade-update.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDeleteComponent } from './component/template/confirm-delete/confirm-delete.component';
import { MatSelectModule } from '@angular/material/select';
import { BibliotecaUpdateComponent } from './component/view/biblioteca/biblioteca-update/biblioteca-update.component';
import { ExemploComponent } from './component/exemplo/exemplo.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    BibliotecaListComponent,
    BibliotecaFormComponent,
    CidadeListComponent,
    CidadeFormComponent,
    HomeComponent,
    RedDirective,
    DiretivasComponent,
    ParaDirective,
    CidadeTableComponent,
    CidadeUpdateComponent,
    ConfirmDeleteComponent,
    BibliotecaUpdateComponent,
    ExemploComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatTableModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
