import { Component, OnInit } from '@angular/core';

import { Categoria } from '../modelo/Categoria';
import { CategoriasService } from '../services/categorias.services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  public categorias: Categoria[] = [];

  constructor(private categoriasService: CategoriasService) {}

  ngOnInit(): void {
    this.categoriasService.categorias.subscribe(categorias => this.categorias = categorias);
    this.categoriasService.cargarcategorias();
  }

  seleccionarCategoria(c: Categoria) {
    this.categoriasService.seleccionarCategoria(c);
  }
}
