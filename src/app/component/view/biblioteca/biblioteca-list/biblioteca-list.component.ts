import { ConfirmDeleteComponent } from './../../../template/confirm-delete/confirm-delete.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BibliotecaService } from './../../../service/biblioteca.service';
import { Biblioteca } from './../biblioteca.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';




const ELEMENT_DATA: Biblioteca[] = [
  {"idBiblioteca": 1, "nomeBiblioteca": "Pio Vargas", "cidade": {"idCidade": 1, "nomeCidade": "Goiânia", "siglaEstado": "GO"}, "endereco": "Praça Pedro Ludovico"},
  {"idBiblioteca": 2, "nomeBiblioteca": "Zeca Batista","cidade": {"idCidade": 2,"nomeCidade": "Anápolis","siglaEstado": "GO"},"endereco": "Praça Americano do Brasil"},
  {"idBiblioteca": 3, "nomeBiblioteca": "Ponto de Leitura", "cidade": { "idCidade": 3, "nomeCidade": "Aparecida de Goiânia", "siglaEstado": "GO"}, "endereco": "Marista Sul"},
  {"idBiblioteca": 4, "nomeBiblioteca": "Cora Coralina", "cidade": {"idCidade": 4, "nomeCidade": "Cidade de Goiás", "siglaEstado": "GO"}, "endereco": "Rua da Ponte"},
  {"idBiblioteca": 5, "nomeBiblioteca": "Machado de Assis", "cidade": {"idCidade": 5, "nomeCidade": "São Sebastião do Rio de Janeiro", "siglaEstado": "RJ"}, "endereco": "Cosme Velho"},
  {"idBiblioteca": 6, "nomeBiblioteca": "Olavo Bilac", "cidade": {"idCidade": 6, "nomeCidade": "São Paulo", "siglaEstado": "SP" }, "endereco": "Luz"},
  {"idBiblioteca": 7, "nomeBiblioteca": "Biblioteca da UFG", "cidade": {"idCidade": 1, "nomeCidade": "Goiânia", "siglaEstado": "GO"}, "endereco": "Campus Samambaia"},
  {"idBiblioteca": 8, "nomeBiblioteca": "Lima Barreto", "cidade": {"idCidade": 4, "nomeCidade": "Cidade de Goiás", "siglaEstado": "GO"}, "endereco": "Avenida Goiás"}
];


@Component({
  selector: 'app-biblioteca-list',
  templateUrl: './biblioteca-list.component.html',
  styleUrls: ['./biblioteca-list.component.css']
})
export class BibliotecaListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'biblioteca', 'cidade', 'endereco', 'action'];

  bibliotecas = [];


  constructor(private servico: BibliotecaService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.servico.read().subscribe(bibliotecas => {
      this.bibliotecas = bibliotecas
      console.log(this.bibliotecas);
    });
  }


  excluir(biblioteca: Biblioteca): void {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      data: {
        message: `Deseja realmente excluir a Biblioteca ${biblioteca.nomeBiblioteca}?`,
        buttonText: {
          ok: 'Excluir',
          cancel: 'Cancelar'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {

        this.servico.delete(biblioteca).subscribe(() => {
          this.servico.showMessage("Biblioteca excluída com sucesso");
        });
      }
    });
    this.router.navigate(['/bibliotecas']);
    }

}
