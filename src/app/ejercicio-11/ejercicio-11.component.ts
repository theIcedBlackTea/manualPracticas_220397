import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-11',
  imports: [NgOptimizedImage],
  templateUrl: './ejercicio-11.component.html',
  styleUrl: './ejercicio-11.component.css'
})
export class Ejercicio11Component {
  logoUrl = '/assets/logo.svg';
  logoAlt = 'Angular logo';
  username = 'Daniel';
}
