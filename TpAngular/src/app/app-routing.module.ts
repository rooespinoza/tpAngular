import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GrillaProductosComponent} from './components/grilla-productos/grilla-productos.component';


const routes: Routes = [
  {path: 'grillaProductos', component: GrillaProductosComponent},
  
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
