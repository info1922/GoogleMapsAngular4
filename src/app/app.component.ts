import { Component } from '@angular/core';

// Servicio
import { MapasService } from './services/mapas.service';
// Interface
import { Marcador } from './interfaces/marcador';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  lat = 16.323050;
  lng = -96.594497;
  zoom = 16;
  draggable = '1';

  marcadorSel: any = null;


  constructor ( public _ms: MapasService ) {
    this._ms.cargarMarcadores();
  }

  mapClicked ( evento ) {
    const nMarcador: Marcador = {
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      titulo: 'Sin titulo',
      draggable: true
    };

    console.log(evento);
    this._ms.insertarMarcador(nMarcador);

  }

  clickMarcador (marcador: Marcador, i: number) {
    console.log(marcador, i);
    this.marcadorSel = marcador;

    if (this.marcadorSel.draggable) {
      this.draggable = '1';
    } else {
      this.draggable = '0';
    }

  }

  cambiarDraggable () {

    console.log(this.draggable);

    if (this.draggable === '1') {
      this.marcadorSel.draggable = true;
    } else {
      this.marcadorSel.draggable = false;
    }

  }

  dragEnd ( marcador: Marcador, evento) {
    console.log(marcador, evento);
    const lat = evento.coords.lat;
    const lng = evento.coords.lng;

    // Seteamos los valores
    marcador.lat = lat;
    marcador.lng = lng;
    this._ms.guardarMarcadores();
  }


}
