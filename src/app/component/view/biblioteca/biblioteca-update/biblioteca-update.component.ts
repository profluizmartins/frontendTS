import { Cidade } from './../../cidade/cidade.model';
import { Biblioteca } from './../biblioteca.model';
import { CidadeService } from './../../../service/cidade.service';
import { BibliotecaService } from './../../../service/biblioteca.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-biblioteca-update',
  templateUrl: './biblioteca-update.component.html',
  styleUrls: ['./biblioteca-update.component.css']
})
export class BibliotecaUpdateComponent implements OnInit {
  
  biblioteca: Biblioteca = {
    cidade: null,
    nomeBiblioteca: "",
    endereco: ""
  }

  cidades : Cidade[];

  constructor(private servico: BibliotecaService, 
    private router: Router,
    private route: ActivatedRoute,
    private cidadeServico: CidadeService) { }

  ngOnInit(): void {
    this.cidadeServico.read().subscribe(cidades => {
      this.cidades = cidades;
    });
    const id = this.route.snapshot.paramMap.get('id');
    this.servico.readById(id).subscribe(biblioteca => {
      console.log(biblioteca)
      this.biblioteca = biblioteca;
    });
 
  }

  salvar(): void{

      this.servico.update(this.biblioteca).subscribe(() => {
      this.servico.showMessage("Biblioteca alterada com sucesso");
      this.router.navigate(['/bibliotecas']);
    })
  }  

}
