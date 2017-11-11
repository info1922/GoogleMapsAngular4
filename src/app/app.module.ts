import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Mapas
import { AgmCoreModule } from '@agm/core';

// Servicio
import { MapasService } from './services/mapas.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDG9AAkgG_aBqbENjS3WbL6pJ2ht9jPW4w'
    })
  ],
  providers: [MapasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
