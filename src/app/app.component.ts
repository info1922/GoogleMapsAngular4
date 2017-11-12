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

  constructor ( public _ms: MapasService ) {

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


}
