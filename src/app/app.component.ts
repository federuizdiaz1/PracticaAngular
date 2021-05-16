import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Feche <3';

 animales:Array<any>=[
  {tipo:'Perro',nombre:'lisa',edad:11},
  {tipo:'Gato',nombre:'elso',edad:1},
  {tipo:'Pato',nombre:'mark',edad:8}
 ]
}
