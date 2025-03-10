import { Component } from '@angular/core';
import { Ejercicio09Component } from '../../ejercicio-09/ejercicio-09.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parents',
  imports: [ Ejercicio09Component, CommonModule],
  templateUrl: './parents.component.html',
  styleUrl: './parents.component.css'
})
export class ParentsComponent {
  items: string[] = [];

  onItemAdded(newItem: string) {
    this.items.push(newItem);
  }
}
