
import { Cidade } from './../cidade.model';
import { CidadeService } from '../../../service/cidade.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cidade-update',
  templateUrl: './../cidade-form/cidade-form.component.html',
  styleUrls: ['./cidade-update.component.css']
})
export class CidadeUpdateComponent implements OnInit {

  isLoadingResults = false;

  cidade: Cidade;
  
  tituloPagina = "Alterar Dados de Cidade";

  constructor(private servico: CidadeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.servico.readById(id).subscribe(cidade => {
      this.cidade = cidade;
    })

  }

  salvarCidade(): void {
    this.isLoadingResults = true;
    this.servico.update(this.cidade).subscribe(() => {
      this.servico.showMessage("Cidade alterada com sucesso");
      this.isLoadingResults = false;
      this.router.navigate(['/cidades'])
    },

    err =>{
      this.isLoadingResults = false;
      this.servico.showMessage("Não foi possível alterar esta cidade", true);
    });
  }
}
