import { CidadeService } from './../../../service/cidade.service';
import { Cidade } from './../../cidade/cidade.model';
import { BibliotecaService } from './../../../service/biblioteca.service';
import { Biblioteca } from './../biblioteca.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biblioteca-form',
  templateUrl: './biblioteca-form.component.html',
  styleUrls: ['./biblioteca-form.component.css']
})
export class BibliotecaFormComponent implements OnInit {

  biblioteca: Biblioteca = {
    cidade: null,
    nomeBiblioteca: "",
    endereco: ""
  }

  cidades : Cidade[];

  constructor(private servico: BibliotecaService, 
    private router: Router,
    private cidadeServico: CidadeService) { }

  ngOnInit(): void {
    this.cidadeServico.read().subscribe(cidades => {
      this.cidades = cidades;
    })
  }

  salvar(): void{
    //console.log(this.biblioteca);
    this.servico.create(this.biblioteca).subscribe(() => {
      this.servico.showMessage("Biblioteca salva com sucesso");
      this.router.navigate(['/bibliotecas']);
    });
  }
}
