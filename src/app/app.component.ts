import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Feche <3';
  show: boolean = true;
  sueldos = [1700, 1600, 1900];
  fondo:any
  activo:any
  // showDos: boolean = true;
}
