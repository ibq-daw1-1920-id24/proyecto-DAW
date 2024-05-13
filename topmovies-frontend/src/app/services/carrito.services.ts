import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemCarrito } from '../modelo/ItemCarrito';
import Pelicula from '../modelo/Pelicula';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

    public items: ItemCarrito[]=[]
    
  constructor() { }

    public AñadirPelicula(pelicula:Pelicula) {
        this.items.push({pelicula:pelicula.nombre, imagen:'/topmovies-api/caratulas/c' + pelicula?.id +'.jpg', precio:pelicula.precio})
    }

    public BorrarPelicula() {

    }
}