import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-05',
  imports: [],
  templateUrl: './ejercicio-05.component.html',
  styleUrl: './ejercicio-05.component.css'
})
export class Ejercicio05Component {
  users = [
    {id: 0, name: 'Daniel'},
    {id: 1, name: 'Jesus'},
    {id: 2, name: 'Amauri'},
    {id: 3, name: 'Diego'},
    {id: 4, name: 'Raul'},
  ];
}
