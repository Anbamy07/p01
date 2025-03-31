import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatosComponent } from "./componentes/datos/datos.component";
import { MascotaComponent } from "./componentes/mascota/mascota.component";
import { VehiculoComponent } from "./componentes/vehiculo/vehiculo.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatosComponent, MascotaComponent, VehiculoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'p01';
}
