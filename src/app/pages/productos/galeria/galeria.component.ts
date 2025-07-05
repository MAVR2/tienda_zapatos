import { Component, Input } from '@angular/core';
import { Producto } from '../../../models/producto.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class GaleriaComponent {
  @Input() productos: Producto[] = [];
}
