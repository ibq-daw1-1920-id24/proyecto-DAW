import { Component, OnInit } from '@angular/core';

import { Categoria } from '../modelo/Categoria';
import { CategoriasService } from '../services/categorias.services';
import { CarritoService } from '../services/carrito.services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  public categorias: Categoria[] = [];
  public tamanioCarrito  = 0;

  constructor(private categoriasService: CategoriasService, private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.categoriasService.categorias.subscribe(categorias => this.categorias = categorias);
    this.categoriasService.cargarcategorias();
    this.carritoService.items.subscribe((items) => this.tamanioCarrito = items.length)
  }

  seleccionarCategoria(c: Categoria) {
    this.categoriasService.seleccionarCategoria(c);
  }
}
