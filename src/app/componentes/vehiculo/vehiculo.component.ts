import { Component } from '@angular/core';

@Component({
  selector: 'app-vehiculo',
  imports: [],
  templateUrl: './vehiculo.component.html',
  styleUrl: './vehiculo.component.css'
})
export class VehiculoComponent {
  vehicle = {
    placa: "CQH-111",
    color: "Gris",
    marca: "Suzuki",
    modelo: "Ignis"
  }
}
