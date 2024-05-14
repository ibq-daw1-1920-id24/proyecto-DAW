import { Component, Input } from '@angular/core';
import { peliculasService } from '../services/peliculas.services';
import Pelicula from '../modelo/Pelicula';
import { CarritoService } from '../services/carrito.services';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html'
})
export class PeliculaComponent {

  @Input()
  public pelicula?: Pelicula;

  constructor(private carritoservice: CarritoService) {}
  
  public AnadirCarrito() {
    this.carritoservice.AnadirPelicula(this.pelicula!);
  }
}
