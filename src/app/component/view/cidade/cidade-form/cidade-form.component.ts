import { Cidade } from './../cidade.model';
import { CidadeService } from '../../../service/cidade.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cidade-form',
  templateUrl: './cidade-form.component.html',
  styleUrls: ['./cidade-form.component.css']
})
export class CidadeFormComponent implements OnInit {
  cidade: Cidade = {
    nomeCidade: "",
    siglaEstado: ""
  }

  tituloPagina = "Cadastar Nova Cidade";

  constructor(private cidadeService: CidadeService, private router: Router) { }

  ngOnInit(): void {
  }

  salvarCidade(): void{
    this.cidadeService.create(this.cidade).subscribe(() => {
      this.cidadeService.showMessage("Cidade salva com sucesso");
      this.router.navigate(['/cidades']);
    },
    err => this.cidadeService.showMessage("Ocorreu algum erro!!" , true) 
    );
  }

}
