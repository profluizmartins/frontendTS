import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../view/usuario/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtenticacaoService {

  baseUrl = "http://localhost:8080/autenticacao";
  
  constructor(
    private snackBar: MatSnackBar, 
    private http : HttpClient
  ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'Fechar', {
      verticalPosition: "top",
      horizontalPosition: "right",
      duration: 3000,
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  login(usuario: Usuario) : Observable<Usuario>{
    return this.http.post<Usuario>(this.baseUrl, usuario);
  }

}
