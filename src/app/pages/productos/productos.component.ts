import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { CategoriaService } from '../../services/categoria.service';
import { Producto } from '../../models/producto.model';
import { Categoria } from '../../models/categoria.model';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuscadorComponent } from './buscador/buscador.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule, CabeceraComponent, BuscadorComponent, GaleriaComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss',
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  categorias: Categoria[] = [];
  filtroNombre: string = '';
  categoriaSeleccionada: number = 0;

  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
    });

    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
    });
  }

  get productosFiltrados(): Producto[] {
    return this.productos.filter(p =>
      p.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase()) &&
      (this.categoriaSeleccionada === 0 || p.categoriaId === this.categoriaSeleccionada)
    );
  }
}
