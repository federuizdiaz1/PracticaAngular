import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  animales:Array<any>=[
    {tipo:'Perro',nombre:'lisa',edad:11},
    {tipo:'Gato',nombre:'elso',edad:1},
    {tipo:'Pato',nombre:'mark',edad:8}
   ]
  constructor() { }

  ngOnInit(): void {
  }

}
