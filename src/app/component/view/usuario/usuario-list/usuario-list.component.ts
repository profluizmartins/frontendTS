import { UsuarioNivel } from './../usuario-nivel.model';
import { ConfirmDeleteComponent } from './../../../template/confirm-delete/confirm-delete.component';
import { Usuario } from './../usuario.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { merge, Observable, of as ofasobservableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/component/service/usuario.service';


@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'nome', 'login', 'dtNascimento', 'nivelAcesso', 'acao'];
  usuarios: Usuario[] = [];

  resultsLength = 0;
  isLoadingResults : boolean = false;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  niveis : UsuarioNivel[] = [
    {id: 1, desc: "Administrador"},
    {id: 2, desc: "Gestor"},
    {id: 3, desc: "Comum"}
  ]

  constructor(private usuarioService: UsuarioService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private router: Router) { }

    atualizarTabela(): void {

      this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
     
      merge(this.sort.sortChange, this.paginator.page)
        .pipe(
          startWith({}),
          switchMap(() => {
            return this.usuarioService!.readTable(this.paginator.pageSize, this.paginator.pageIndex);
          }),
          map(page => {
            this.isLoadingResults = false;
            this.resultsLength = page.totalElements;
            return page.content;
          }),
          catchError(err => {
            this.isLoadingResults = false;
            return ofasobservableOf([]);
          })
        ).subscribe(data => {
          this.usuarios = data;
        });
        
  
    }
    getNivel(id: number): string {
      let str = "";
  
      for(let nivel of this.niveis ){
        if(nivel.id == id){
          return nivel.desc;
        }
      }
      return str;
    }
  ngAfterViewInit(): void {
    this.atualizarTabela();
    
  }

  mostraUsuarios(): void {
    console.log(this.usuarios);
  }


  excluirUsuario(usuario: Usuario): void {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      data: {
        message: `Deseja realmente excluir ${usuario.nomeUsuario}?`,
        buttonText: {
          ok: 'Excluir',
          cancel: 'Cancelar'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      this.isLoadingResults = true;
      if (confirmed) {

        this.usuarioService.delete(usuario).subscribe(() => {
          this.usuarioService.showMessage("Usuário excluído com sucesso");
          this.isLoadingResults = false;
          this.atualizarTabela();
        });
      }
    },

      err => {
        this.isLoadingResults = false;
        this.usuarioService.showMessage("Não foi possível excluir este usuário", true);
      });

  }

}
