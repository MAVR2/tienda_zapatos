import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from '../../../models/categoria.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class BuscadorComponent {
  @Input() categorias: Categoria[] = [];
  @Input() filtroNombre: string = '';
  @Input() categoriaSeleccionada: number = 0;

  @Output() filtroNombreChange = new EventEmitter<string>();
  @Output() categoriaSeleccionadaChange = new EventEmitter<number>();
}
