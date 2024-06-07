import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../modelo/Usuario';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public autenticado = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) { }

  public registrar(usuario: Usuario) {
    const peticion = this.httpClient.post<Usuario>('/topmovies-api/registrar.php', usuario);
    peticion.subscribe(resultado => {});
  }

  public login(usuario: Usuario) {
    const peticion = this.httpClient.post<Usuario>('/topmovies-api/login.php', usuario);
    peticion.subscribe((resultado: any) => {
      if (resultado.resultado == 'ok') {
        this.autenticado.next(true)
      }
      else {
        this.autenticado.next(false);
      }
    });
  }
}
