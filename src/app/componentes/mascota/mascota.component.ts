import { Component } from '@angular/core';

@Component({
  selector: 'app-mascota',
  imports: [],
  templateUrl: './mascota.component.html',
  styleUrl: './mascota.component.css'
})
export class MascotaComponent {
  animal = {
    tipo: "Perro",
    nombre: "Chelsea",
    peso: "5kg",
    edad: 9
  }
}
