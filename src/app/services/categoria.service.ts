import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiUrl = "https://localhost:7224/api/categorias"

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria []> {
    return this.http.get<Categoria[]>(this.apiUrl)
  }
}
