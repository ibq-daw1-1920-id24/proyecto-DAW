import { Injectable } from '@angular/core';
import { ItemCarrito } from '../modelo/ItemCarrito';
import Pelicula from '../modelo/Pelicula';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  public items = new BehaviorSubject<ItemCarrito[]>([]);
  
  constructor(private httpClient: HttpClient) { }

    public AnadirPelicula(pelicula:Pelicula) {
      if (this.items.value.every(item => item.id != pelicula.id)) {
        this.items.next([...this.items.value,{pelicula:pelicula.nombre, imagen:'/topmovies-api/caratulas/c' + pelicula?.id +'.jpg', precio:pelicula.precio, id:pelicula.id}]);
      }
    }

    public BorrarPelicula(id:number) {
      this.items.next(this.items.value.filter(item => item.id !=id));
    }

    public Comprar() {
      const idsPeliculas = [];
      for (let i = 0; i < this.items.value.length; i++) {
        idsPeliculas.push(this.items.value[i].id);
      }
      const peticion = this.httpClient.post('/topmovies-api/comprar.php', idsPeliculas);
      peticion.subscribe(resultado => {
        this.items.next([]);
      });
    }
}