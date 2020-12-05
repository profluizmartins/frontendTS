


import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { UsuarioPage } from '../view/usuario/usuario-list/usuario-page';
import { Usuario } from '../view/usuario/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  baseUrl = "http://localhost:8080/usuarios";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'Fechar', {
      verticalPosition: "top",
      horizontalPosition: "right",
      duration: 3000,
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }
  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario);
  }

  read(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl);
  }

  readTable(size: number, page: number): Observable<UsuarioPage> {
    const url = `${this.baseUrl}/datatable`
    return this.http.get<UsuarioPage>(url, {
      params: new HttpParams()
        .set('page', page.toString())
        .set('size', size.toString())
    });
  }

  readById(id: string): Observable<Usuario> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Usuario>(url);
  }

  update(usuario: Usuario): Observable<Usuario> {
    const url = `${this.baseUrl}/${usuario.idUsuario}`;
    return this.http.put<Usuario>(url, usuario);
  }


  delete(usuario: Usuario): Observable<Usuario> {
    const url = `${this.baseUrl}/${usuario.idUsuario}`;
    return this.http.delete<Usuario>(url);
  }
}
