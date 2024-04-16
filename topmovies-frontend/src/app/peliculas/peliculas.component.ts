import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
    private categoriasService: CategoriasService,
    private route: ActivatedRoute) {}

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      const idCat = params.get('idCat');
      if (idCat)
        this.peliculasService.cargarpeliculas(parseInt(idCat));
      else
        this.peliculasService.borrarpeliculas();
      this.peliculasService.
    });

    this.peliculasService.peliculas.subscribe((peliculas) => this.peliculas = peliculas)
  }
}
