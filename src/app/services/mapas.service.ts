import { Injectable } from '@angular/core';

import { Marcador } from './../interfaces/marcador';

@Injectable()
export class MapasService {

  marcadores: Marcador[] = [];

  constructor() {

    const nuevoMarcador: Marcador = {
      lat: 16.323050,
      lng: -96.594497,
      titulo: 'Mi casaaaa',
      draggable: true
    };

    // Añadiendolo a nuestro arreglo de marcadores
    this.marcadores.push( nuevoMarcador );
  }

  insertarMarcador ( marcador: Marcador) {
    this.marcadores.push(marcador);
    this.guardarMarcadores();
    console.log(this.marcadores.length);
  }

  guardarMarcadores () {

    // Guarda los marcadores en el local storage
    // el local storage solo maneja string (strigify)
    localStorage.setItem('marcadores', JSON.stringify( this.marcadores ));
  }

  cargarMarcadores () {

    // Carga los marcadores previamente guardados en el local Storage
    if (localStorage.getItem('marcadores')) {
      // Reconverti con JSON.parse
      this.marcadores = JSON.parse(localStorage.getItem('marcadores')) ;
    } else {
      this.marcadores = [];
    }

  }

}
