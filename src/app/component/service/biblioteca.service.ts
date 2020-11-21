import { Observable } from 'rxjs';
import { Biblioteca } from './../view/biblioteca/biblioteca.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {


  baseUrl = "http://localhost:8080/bibliotecas";

  constructor(private snackBar: MatSnackBar, private http : HttpClient) { }

  showMessage(msg : string) : void{
    this.snackBar.open(msg, 'Fechar', {
      verticalPosition: "top",
      horizontalPosition: "right",
      duration: 3000
    })
  }

  create(biblioteca: Biblioteca) : Observable<Biblioteca>{
    return this.http.post<Biblioteca>(this.baseUrl, biblioteca);
  }

  read(): Observable<Biblioteca[]>{
    return this.http.get<Biblioteca[]>(this.baseUrl);
  }

  readById(id : string): Observable<Biblioteca>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Biblioteca>(url);
  }

  update(biblioteca: Biblioteca) : Observable<Biblioteca>{
    const url = `${this.baseUrl}/${biblioteca.idBiblioteca}`;
    return this.http.put<Biblioteca>(url, biblioteca);
  }


  delete(biblioteca: Biblioteca) : Observable<Biblioteca>{
    const url = `${this.baseUrl}/${biblioteca.idBiblioteca}`;
    return this.http.delete<Biblioteca>(url);  
  }
}
