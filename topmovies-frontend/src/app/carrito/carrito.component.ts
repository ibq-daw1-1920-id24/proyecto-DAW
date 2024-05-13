import { Component } from '@angular/core';

export interface PeriodicElement {
  Imagen: string;
  Pelicula: string;
  Precio: number;
  Eliminar: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Pelicula: 'titanic', Imagen: '/topmovies-api/caratulas/c5.jpg', Precio: 1.0079, Eliminar: 'H'},
  {Pelicula: 'spiderman', Imagen: '/topmovies-api/caratulas/c5.jpg', Precio: 4.0026, Eliminar: 'He'},
  {Pelicula: 'batman', Imagen: '/topmovies-api/caratulas/c5.jpg', Precio: 6.941, Eliminar: 'Li'},
  {Pelicula: 'coco', Imagen: '/topmovies-api/caratulas/c5.jpg', Precio: 9.0122, Eliminar: 'Be'},
  {Pelicula: 'del reves', Imagen: '/topmovies-api/caratulas/c5.jpg', Precio: 10.811, Eliminar: 'B'},
  {Pelicula: 'interestelar', Imagen: '/topmovies-api/caratulas/c5.jpg', Precio: 12.0107, Eliminar: 'C'},
  {Pelicula: 'rec', Imagen: '/topmovies-api/caratulas/c5.jpg', Precio: 14.0067, Eliminar: 'N'},
  {Pelicula: 'matrix', Imagen: '/topmovies-api/caratulas/c5.jpg', Precio: 15.9994, Eliminar: 'O'},
  {Pelicula: 'enredados', Imagen: '/topmovies-api/caratulas/c5.jpg', Precio: 18.9984, Eliminar: 'F'},
  {Pelicula: 'el padrino', Imagen: '/topmovies-api/caratulas/c5.jpg', Precio: 20.1797, Eliminar: 'Ne'},
];

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  displayedColumns: string[] = ['Pelicula', 'Imagen', 'Precio', 'Eliminar'];

  public dataSource = ELEMENT_DATA;
}
