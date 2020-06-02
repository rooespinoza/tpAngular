import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-grilla-productos',
  templateUrl: './grilla-productos.component.html',
  styleUrls: ['./grilla-productos.component.css']
})
export class GrillaProductosComponent implements OnInit {
  instrumentosArray:any[] =[];
  constructor(private servicio:ServicioService) { }

  ngOnInit(): void {
    this.instrumentosArray = this.servicio.getInstrumentos();
    console.log(this.instrumentosArray);
  }

}
