import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'productos', component: ProductosComponent}
];
