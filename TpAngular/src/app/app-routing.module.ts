import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {UbicacionComponent} from './components/ubicacion/ubicacion.component'
import {GrillaProductosComponent} from './components/grilla-productos/grilla-productos.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent }, 
    { path: 'ubicacion', component: UbicacionComponent },
    //{ path: 'productos', component: ProductoComponent },
    {path: 'grillaProductos', component: GrillaProductosComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
