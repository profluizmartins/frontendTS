import { UsuarioNivel } from './usuario-nivel.model';


export interface Usuario {
    idUsuario?: number;
    nomeUsuario: string;
    dtNascimento: string;
    login: string;
    senha: string;
    nivel: number;
  }

