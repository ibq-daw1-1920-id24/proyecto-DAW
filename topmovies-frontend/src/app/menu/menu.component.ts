import { Component, OnInit } from '@angular/core';

import { Categoria } from '../modelo/Categoria';
import { CategoriasService } from '../services/categorias.services';
import { CarritoService } from '../services/carrito.services';
import { UsuariosService } from '../services/usuarios.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  public categorias: Categoria[] = [];
  public tamanioCarrito  = 0;
  public autenticado = false;
  public visible = true;

  constructor(
    private usuariosService: UsuariosService, private categoriasService: CategoriasService, private carritoService: CarritoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoriasService.categorias.subscribe(categorias => this.categorias = categorias);
    this.categoriasService.cargarcategorias();
    this.carritoService.items.subscribe((items) => this.tamanioCarrito = items.length)
    this.usuariosService.autenticado.subscribe(autenticado => this.autenticado = autenticado);
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(ev => {
        const event = ev as NavigationEnd;
        console.log(event);
        this.visible = !event.url.startsWith('/ver');
      })
  }

  seleccionarCategoria(c: Categoria) {
    this.categoriasService.seleccionarCategoria(c);
  }
}
