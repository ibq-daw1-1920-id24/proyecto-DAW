import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';

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
  public autenticado: boolean = false;

  constructor(private usuariosService: UsuariosService) {
    this.usuariosService.autenticado.subscribe(autenticado => this.autenticado = autenticado);
  }
  
  registrarse(registroForm: NgForm) {
    const usuario = {
      id: this.id,
      clave: this.clave
    };

    this.usuariosService.registrar(usuario);
  }

  iniciarSesion() {
    const usuario = {
      id: this.idLogin,
      clave: this.claveLogin
    };

    this.usuariosService.login(usuario);
  }
}
