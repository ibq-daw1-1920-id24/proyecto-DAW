import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { RegistroComponent } from './registro/registro.component';
import { CompradasComponent } from './compradas/compradas.component';
import { VerComponent } from './ver/ver.component';

const routes: Routes = [{
  path: 'inicio',
  component: InicioComponent
},
{
  path: 'registro',
  component: RegistroComponent
},
{
  path: 'carrito',
  component: CarritoComponent
},
{
  path: '',
  component: PaginaPrincipalComponent
},
{
  path: 'categoria/:idCat',
  component: PeliculasComponent
},
{
  path: 'compradas',
  component: CompradasComponent
},
{
  path: 'ver/:codigo',
  component: VerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
