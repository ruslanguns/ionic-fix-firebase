import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  //Insertamos los datos a mostrar, tipo BD
  datos = [
    {
      nombre: 'Pepe Juan',
      apellidos: 'Pérez Rodríguez',
      edad: '27',
      fecha: '11/oct/2018',
      sexo: 'hombre'
    },
    {
      nombre: 'Josefa',
      apellidos: 'Gil Marín',
      edad: '35',
      fecha: '17/sep/2015',
      sexo: 'mujer'
    },
    {
      nombre: 'Rocío',
      apellidos: 'Suárez Hernández',
      edad: '21',
      fecha: '19/sep/2019',
      sexo: 'No contesta'
    },
    {
      nombre: 'Juan',
      apellidos: 'García Ripoll',
      edad: '25',
      fecha: '15/sep/2020',
      sexo: 'hombre'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
