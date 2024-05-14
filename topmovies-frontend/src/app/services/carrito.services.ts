import { Injectable } from '@angular/core';
import { ItemCarrito } from '../modelo/ItemCarrito';
import Pelicula from '../modelo/Pelicula';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  public items = new BehaviorSubject<ItemCarrito[]>([]);
    
  constructor() { }

    public AnadirPelicula(pelicula:Pelicula) {
        this.items.next([...this.items.value,{pelicula:pelicula.nombre, imagen:'/topmovies-api/caratulas/c' + pelicula?.id +'.jpg', precio:pelicula.precio, id:pelicula.id}]);
    }

    public BorrarPelicula(id:number) {
      this.items.next(this.items.value.filter(item => item.id !=id));
    }
}