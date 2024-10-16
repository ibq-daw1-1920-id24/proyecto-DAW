import { Component } from '@angular/core';
import Pelicula from '../modelo/Pelicula';
import { peliculasService } from '../services/peliculas.services';


@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent {
  public vistas: Pelicula[]=[];
  public galardonadas: Pelicula[]=[];
  
  constructor(
    private peliculasService: peliculasService,
  ) {}

  ngOnInit() {   
    this.peliculasService.cargarMasVistas();
    this.peliculasService.cargarMasGalardonadas();
    this.peliculasService.peliculas_mas_vistas.subscribe((peliculas) => this.vistas = peliculas)
    this.peliculasService.peliculas_mas_galardonadas.subscribe((peliculas) => this.galardonadas = peliculas)
  };
}
