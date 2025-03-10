import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar',
  imports: [ MatButtonModule, MatToolbarModule, MatMenuModule, MatToolbarModule, MatIconModule, MatMenuModule],
  //templateUrl: './toolbar.component.html',
  template: `
  <mat-toolbar color="primary" class="sticky-toolbar">
    <span class="text-x1 font-bold">Mi Plataforma</span>
    <span class="spacer"></span>
    <nav>
      <button mat-button>Ejercicios</button>
      <button mat-button>Tareas</button>
      <button mat-button>Examen Práctico</button>
      <button mat-button>Acerca de</button>
    </nav>
    <span class="spacer"></span>

    <!-- Imagen de usuario con menú -->
     <button mat-icon-button [matMenuTriggerFor]="menu">
      <img class="user-avatar" src="assets/user.jpg" alt="Usuario">
     </button>

     <mat-menu #menu="matMenu">
       <button mat-menu-item>Perfil</button>
       <button mat-menu-item>Cerrar Sesión</button>
     </mat-menu>
  </mat-toolbar>
  `,
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

}
