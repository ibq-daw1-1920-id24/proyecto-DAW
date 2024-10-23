import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: []
})
export class InicioComponent {

  public id: string = '';
  public clave: string = '';
  public idLogin: string = '';
  public claveLogin: string = '';

  constructor(private usuariosService: UsuariosService, private router: Router) {
    this.usuariosService.autenticado.subscribe(autenticado => {
      if (autenticado) this.router.navigate(['/'])
    });
  }

  iniciarSesion() {
    const usuario = {
      id: this.idLogin,
      clave: this.claveLogin
    };

    this.usuariosService.login(usuario);
  }
}
