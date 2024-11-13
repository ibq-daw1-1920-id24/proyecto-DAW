import { Component } from '@angular/core';
import { CarritoService } from '../services/carrito.services';
import { ItemCarrito } from '../modelo/ItemCarrito';

export interface PeriodicElement {
  Imagen: string;
  Pelicula: string;
  Precio: number;
  Eliminar: string;
}

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  displayedColumns: string[] = ['Pelicula', 'Imagen', 'Precio', 'Eliminar'];

  public dataSource:ItemCarrito[] = [];
  public total: number = 0;
  constructor (
    private carritoService: CarritoService
  ) {}
  ngOnInit() {
    this.carritoService.items.subscribe((items) => {
      this.dataSource = items;
      this.total = 0;
      for (let i=0; i<items.length; i++) {
        this.total = this.total + items[i].precio;
      }
    })
  }
  BorrarPelicula(id:number) {
    this.carritoService.BorrarPelicula(id);
  }
  comprar() {
    this.carritoService.Comprar();
  }
}
