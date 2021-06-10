import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Solicitud} from "../solicitud/solicitud";

@Component({
  selector: 'app-fila-solicitud',
  template:  `
      <td>{{solicitud.nombre}}</td>
    <td>{{solicitud.apellidos}}</td>
    <td><button (click)="this.eliminar()">Eliminar</button></td>
  `,
  styleUrls: ['./fila-solicitud.component.css']
})
export class FilaSolicitudComponent implements OnInit {

  @Input()
  solicitud:Solicitud={nombre:'',apellidos:'','valor':''};

  @Output()
  solicitudEliminada=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  eliminar() {
    this.solicitudEliminada.emit(this.solicitud)
  }

}
