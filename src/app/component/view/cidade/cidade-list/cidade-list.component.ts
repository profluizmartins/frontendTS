import { MatPaginator } from '@angular/material/paginator';
import { ConfirmDeleteComponent } from './../../../template/confirm-delete/confirm-delete.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CidadeService } from '../../../service/cidade.service';
import { Cidade } from './../cidade.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { merge, Observable, of as ofasobservableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-cidade-list',
  templateUrl: './cidade-list.component.html',
  styleUrls: ['./cidade-list.component.css']
})
export class CidadeListComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'cidade', 'estado', 'acao'];
  cidades: Cidade[] = [];

  resultsLength = 0;
  isLoadingResults : boolean = false;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private cidadeService: CidadeService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private router: Router) { }

  atualizarTabela(): void {

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
   
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.cidadeService!.readTable(this.paginator.pageSize, this.paginator.pageIndex);
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
        this.cidades = data;
      });


  }
  ngAfterViewInit(): void {
    this.atualizarTabela();
  }



  excluirCidade(cidade: Cidade): void {
    console.log(cidade.nomeCidade)
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      data: {
        message: `Deseja realmente excluir ${cidade.nomeCidade}?`,
        buttonText: {
          ok: 'Excluir',
          cancel: 'Cancelar'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      this.isLoadingResults = true;
      if (confirmed) {

        this.cidadeService.delete(cidade).subscribe(() => {
          this.cidadeService.showMessage("Cidade salva excluída com sucesso");
          this.isLoadingResults = false;
          this.atualizarTabela();
        });
      }
    },

      err => {
        this.isLoadingResults = false;
        this.cidadeService.showMessage("Não foi possível excluir esta cidade", true);
      });

  }


}
