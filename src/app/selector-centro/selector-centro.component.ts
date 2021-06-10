import {Component, OnInit, Output} from '@angular/core';
import {Centro} from "../centros/centros.component";

@Component({
  selector: 'app-selector-centro',
  template:`
  <input (keyup)="buscarCentro($event)" [value]="centroSeleccionado?.nombre"/>
  <table>
    <tr *ngFor="let centro of centrosFiltrados"><td><p (click)="seleccionarCentro(centro)">{{centro.nombre | uppercase}}</p></td></tr>
  </table>
  `,
  styleUrls: ['./selector-centro.component.css']
})
export class SelectorCentroComponent implements OnInit {

  centros:Centro[] = [{nombre:"Ponce de Leon"}, {nombre: "San Agustin"}]
  centrosFiltrados:Centro[]=[];

  @Output()
  centroSeleccionado?:Centro = {nombre:''};

  constructor() { }

  ngOnInit(): void {
  }

  buscarCentro ($event: KeyboardEvent) {
    let target = $event.target as HTMLInputElement
    this.centrosFiltrados = this.centros.filter(centro => centro.nombre?.toLocaleLowerCase().includes(target.value.toLocaleLowerCase()))
  }

  seleccionarCentro(centro:Centro){
    this.centroSeleccionado=centro;
  }

}
