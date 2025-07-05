import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { BannerComponent } from '../../shared/banner/banner.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [RouterOutlet, CommonModule, CabeceraComponent,BannerComponent, FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
