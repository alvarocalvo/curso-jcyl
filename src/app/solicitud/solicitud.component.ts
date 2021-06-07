import { Component, OnInit } from '@angular/core';
import {Solicitud} from "./solicitud";

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  sol:Solicitud = {nombre: "", apellidos: "", valor:""}
  solicitudes:Array<Solicitud>  = [{nombre:"nombreEstatico", apellidos: "apellidosEstaticos", valor:"1"},{nombre:"nombreEstatico", apellidos: "apellidosEstaticos", valor:"2"}]

  constructor() {
    setInterval(() => {
      this.sol.valor = ''+Math.random()
    }, 2000);
  }

  annadir(nombreInput:string, apellidosInput: string) {
        let solicitudTest:Solicitud = {nombre:nombreInput, apellidos: apellidosInput, valor:""}
        this.solicitudes.push(solicitudTest);
  }

  eliminar(solicitud:Solicitud) {
    this.solicitudes=this.solicitudes.filter(x=>x.valor != solicitud.valor)
  }

  apellidos($event:KeyboardEvent) {
    const element = $event.target as HTMLInputElement;
    this.sol.apellidos=element.value;
  }

  nombre($event:KeyboardEvent) {
    const element = $event.target as HTMLInputElement;
    this.sol.nombre=element.value;
  }

  ngOnInit(): void {
  }

}
