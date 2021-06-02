import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitud = {nombre: "Alvaro"}

  constructor() {
    setInterval(() => {
      this.solicitud.nombre = ''+Math.random()
    }, 2000);
  }

  accion(accion:string) {
    switch(accion) {
      case 'eliminar':
        console.log('Eliminar');
        break;
      default:
        console.log('por defecto');
        break;
    }
  }

  ngOnInit(): void {
  }

}
