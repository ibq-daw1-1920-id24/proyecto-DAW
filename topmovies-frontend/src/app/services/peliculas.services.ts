import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import pelicula from '../modelo/Pelicula';

@Injectable({
  providedIn: 'root'
})
export class peliculasService {

  public peliculas = new BehaviorSubject<pelicula[]>([]);
  public peliculas_mas_vistas = new BehaviorSubject<pelicula[]>([]);
  public peliculas_mas_galardonadas = new BehaviorSubject<pelicula[]>([]);

  constructor(private httpClient: HttpClient) { }

  public cargarpeliculas(categoria: number) {
    const peticion = this.httpClient.get<pelicula[]>('/topmovies-api/peliculas.php?categoria=' + categoria);
    peticion.subscribe(resultado => this.peliculas.next(resultado));
  }

  public cargarMasVistas() {
    const peticion = this.httpClient.get<pelicula[]>('/topmovies-api/peliculas_mas_vistas.php');
    peticion.subscribe(resultado => this.peliculas_mas_vistas.next(resultado));
  }

  public cargarMasGalardonadas() {
    const peticion = this.httpClient.get<pelicula[]>('/topmovies-api/peliculas_mas_galardonadas.php');
    peticion.subscribe(resultado => this.peliculas_mas_galardonadas.next(resultado));
  }

  public borrarpeliculas() {
    this.peliculas.next([]);
  }
}