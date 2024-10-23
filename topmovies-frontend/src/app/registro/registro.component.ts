import { Component } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent {

  public id: string = '';
  public clave: string = '';
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
}
