import { Component, Input } from '@angular/core';
import { peliculasService } from '../services/peliculas.services';
import Pelicula from '../modelo/Pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html'
})
export class PeliculaComponent {

  @Input()
  public pelicula?: Pelicula;

  constructor(private peliculasService: peliculasService) {}

  ngOnInit() {

  }
}
