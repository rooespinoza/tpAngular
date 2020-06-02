import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from './components/home/home.component';
import {UbicacionComponent} from './components/ubicacion/ubicacion.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GrillaProductosComponent } from './components/grilla-productos/grilla-productos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UbicacionComponent,
    NavbarComponent,
    GrillaProductosComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
