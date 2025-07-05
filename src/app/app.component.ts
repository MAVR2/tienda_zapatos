import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './shared/cabecera/cabecera.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from './shared/banner/banner.component';
import { Router } from 'express';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, RouterOutlet, CabeceraComponent,BannerComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tienda_zapatos';
}
