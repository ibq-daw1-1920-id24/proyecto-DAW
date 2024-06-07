import { Component } from '@angular/core';
import { Usuario } from '../modelo/usuario';
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

  constructor(private usuariosService: UsuariosService) {}
  
  registrarse(registroForm: NgForm) {
    const usuario = {
      id: this.id,
      clave: this.clave
    };

    this.usuariosService.registrar(usuario);
  }
}
