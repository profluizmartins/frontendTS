import { Cidade } from './../cidade/cidade.model';
export interface Biblioteca {
    idBiblioteca?: number;
    nomeBiblioteca: string;
    endereco: string;
    cidade: Cidade;
  }