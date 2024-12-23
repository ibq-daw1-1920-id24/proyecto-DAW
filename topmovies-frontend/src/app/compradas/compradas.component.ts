import { Component } from '@angular/core';
import Pelicula from '../modelo/Pelicula';
import { peliculasService } from '../services/peliculas.services';

@Component({
  selector: 'app-compradas',
  templateUrl: './compradas.component.html',
  styleUrls: ['./compradas.component.css']
})
export class CompradasComponent {
  public compradas: Pelicula[]=[];

  constructor(
    private peliculasService: peliculasService
  ) {}
  
  ngOnInit() {
    this.peliculasService.borrarpeliculas();
    this.peliculasService.peliculas.subscribe((peliculas) => this.compradas = peliculas)
    this.peliculasService.cargarCompradas();
  }
}
