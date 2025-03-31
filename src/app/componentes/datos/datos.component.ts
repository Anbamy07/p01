import { Component } from '@angular/core';

@Component({
  selector: 'app-datos',
  imports: [],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})
export class DatosComponent {
  datos = {
    nombre: "Gonzalo Andrhé",
    apellido: "Flores Coral",
    correo: "gonzalucho2004@hotmail.com",
    celular: "929546389",
    fechanac: "05/05/2004",
    direccion: "Chalet 53 C"
  }
}
