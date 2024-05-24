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
  constructor (
    private carritoService: CarritoService
  ) {}
  ngOnInit() {
    this.carritoService.items.subscribe((items) => this.dataSource = items)
  }
  BorrarPelicula(id:number) {
    this.carritoService.BorrarPelicula(id)
  }
}
