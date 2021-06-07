import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centros',
  template: `
    <table>
      <tr>
        <td>Nombre centro</td>
      </tr>
      <tr *ngFor="let centroFor of centros">
        <td><app-centro [centro]="centroFor"></app-centro></td>
      </tr>
    </table>
  `,
  styleUrls: ['./centros.component.css']
})
export class CentrosComponent implements OnInit {

  centros:Centro[] = [{nombre: "Centro 1"},{nombre:"Centro 2"}]

  constructor() { }

  ngOnInit(): void {
  }

}


export class Centro {
  nombre?:String;
}
