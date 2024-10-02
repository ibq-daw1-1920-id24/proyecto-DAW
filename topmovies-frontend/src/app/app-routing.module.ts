import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

const routes: Routes = [{
  path: '',
  component: InicioComponent
},
{
  path: 'carrito',
  component: CarritoComponent
},
{
  path: 'pagina-principal',
  component: PaginaPrincipalComponent
},
{
  path: 'categoria/:idCat',
  component: PeliculasComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
