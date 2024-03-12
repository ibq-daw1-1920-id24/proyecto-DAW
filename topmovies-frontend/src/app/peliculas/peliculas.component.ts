import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { peliculasService } from '../services/peliculas.services';
import Pelicula from '../modelo/Pelicula';
import { Categoria } from '../modelo/Categoria';
import { CategoriasService } from '../services/categorias.services';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html'
})
export class PeliculasComponent {

  public categoria: Categoria | null = null;
  public peliculas: Pelicula[]=[];

  constructor(
    private peliculasService: peliculasService,
    private categoriasService: CategoriasService) {}

  ngOnInit() {

    this.categoriasService.categoriaSeleccionada.subscribe(c => {
      this.categoria = c;
      if (c != null)
        this.peliculasService.cargarpeliculas(c!.id);
      else
        this.peliculasService.borrarpeliculas();
    });

    this.peliculasService.peliculas.subscribe((peliculas) => this.peliculas = peliculas)
  }
}
