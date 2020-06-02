import { Injectable } from '@angular/core';
import  *  as  data  from  'src/assets/datos/instrumentos.json';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  instrumentoFile:any  = (data  as  any).default;

  constructor() {
    console.log("Servicio cargado");
    //console.log(this.instrumentoFile);
   }

  public getInstrumentos(){
    return this.instrumentoFile.instrumentos;
    //console.log(this.instrumentoFile.instrumentos);
  }
}
