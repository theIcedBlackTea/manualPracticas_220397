import { Component } from '@angular/core';
import {Routes} from '@angular/router';

@Component({
  selector: 'app-ejercicio-13',
  imports: [],
  templateUrl: './ejercicio-13.component.html',
  styleUrl: './ejercicio-13.component.css'
})
export class Ejercicio13Component {

}
export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: Ejercicio13Component,
  },
  {
    path: 'user',
    title: 'App User Page',
    component: Ejercicio13Component,
  },
];
