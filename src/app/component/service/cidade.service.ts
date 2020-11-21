import { CidadePage } from './../view/cidade/cidade-list/cidade-page';
import { Cidade } from './../view/cidade/cidade.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  baseUrl = "http://localhost:8080/cidades";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'Fechar', {
      verticalPosition: "top",
      horizontalPosition: "right",
      duration: 3000,
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(cidade: Cidade): Observable<Cidade> {
    return this.http.post<Cidade>(this.baseUrl, cidade);
  }

  read(): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(this.baseUrl);
  }

  readTable(size: number, page: number): Observable<CidadePage> {
    const url = `${this.baseUrl}/datatable`
    return this.http.get<CidadePage>(url, {
      params: new HttpParams()
        .set('page', page.toString())
        .set('size', size.toString())
    });
  }

  readById(id: string): Observable<Cidade> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cidade>(url);
  }

  update(cidade: Cidade): Observable<Cidade> {
    const url = `${this.baseUrl}/${cidade.idCidade}`;
    return this.http.put<Cidade>(url, cidade);
  }


  delete(cidade: Cidade): Observable<Cidade> {
    const url = `${this.baseUrl}/${cidade.idCidade}`;
    return this.http.delete<Cidade>(url);
  }

}
