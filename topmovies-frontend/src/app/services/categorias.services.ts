import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Categoria} from '../modelo/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  public categorias = new BehaviorSubject<Categoria[]>([]);
  public categoriaSeleccionada = new BehaviorSubject<Categoria|null>(null);

  constructor(private httpClient: HttpClient) { }

  public cargarcategorias() {
    const peticion = this.httpClient.get<Categoria[]>('/topmovies-api/categorias.php');
    peticion.subscribe(resultado => this.categorias.next(resultado));
  }

  public seleccionarCategoria(c: Categoria) {
    this.categoriaSeleccionada.next(c);
  }
}