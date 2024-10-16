import { Component, OnInit } from '@angular/core';

import { Categoria } from '../modelo/Categoria';
import { CategoriasService } from '../services/categorias.services';
import { CarritoService } from '../services/carrito.services';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  public categorias: Categoria[] = [];
  public tamanioCarrito  = 0;
  public autenticado = false;

  constructor(
    private usuariosService: UsuariosService, private categoriasService: CategoriasService, private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.categoriasService.categorias.subscribe(categorias => this.categorias = categorias);
    this.categoriasService.cargarcategorias();
    this.carritoService.items.subscribe((items) => this.tamanioCarrito = items.length)
    this.usuariosService.autenticado.subscribe(autenticado => this.autenticado = autenticado);
  }

  seleccionarCategoria(c: Categoria) {
    this.categoriasService.seleccionarCategoria(c);
  }
}
