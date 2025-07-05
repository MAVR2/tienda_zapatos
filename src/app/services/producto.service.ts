import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'https://localhost:7224/api/productos'

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.apiUrl)
  }
  getProducto(id: number): Observable<Producto>{
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  } 
  agregarProdcuto(producto: Producto): Observable<Producto>{
    return this.http.post<Producto>(this.apiUrl, producto);
  }
  actualizarProducto(producto: Producto): Observable<any>{
    return this.http.put(`${this.apiUrl}/${producto.id}`, producto);
  }
    eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
