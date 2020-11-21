import { Cidade } from './../../component/view/cidade/cidade.model';
import { Component, OnInit, ElementRef } from '@angular/core';

const cidades: Cidade[] = [
  {"idCidade": 1, "nomeCidade": "Goiânia", "siglaEstado": "GO"},
  {"idCidade": 5, "nomeCidade": "São Sebastião do Rio de Janeiro", "siglaEstado": "RJ"},
  {"idCidade": 6, "nomeCidade": "São Paulo", "siglaEstado": "SP"}
]

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {

  variavel = "var";

  constructor() { }

  ngOnInit(): void {
  }

  mensagemDeLog(): void {
    console.log('Você clicou no botão');
  }
}
