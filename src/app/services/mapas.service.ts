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
  }

}
