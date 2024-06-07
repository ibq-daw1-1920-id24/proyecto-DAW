import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient) { }

  public registrar(usuario: Usuario) {
    const peticion = this.httpClient.post<Usuario>('/topmovies-api/registrar.php', usuario);
    peticion.subscribe(resultado => {});
  }
}
