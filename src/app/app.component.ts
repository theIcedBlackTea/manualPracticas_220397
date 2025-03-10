import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
/*import { Ejercicio01Component } from './ejercicio-01/ejercicio-01.component';
import { Ejercicio02Component } from './ejercicio-02/ejercicio-02.component';
import { Ejercicio03Component } from './ejercicio-03/ejercicio-03.component';
import { Ejercicio04Component } from "./ejercicio-04/ejercicio-04.component";
import { Ejercicio05Component } from "./ejercicio-05/ejercicio-05.component";
import { Ejercicio06Component } from "./ejercicio-06/ejercicio-06.component";
import { Ejercicio07Component } from "./ejercicio-07/ejercicio-07.component";
import { Ejercicio08Component } from "./ejercicio-08/ejercicio-08.component";
import { Ejercicio09Component } from "./ejercicio-09/ejercicio-09.component";
import { Ejercicio10Component } from "./ejercicio-10/ejercicio-10.component";
import { Ejercicio11Component } from "./ejercicio-11/ejercicio-11.component";
import { Ejercicio12Component } from "./ejercicio-12/ejercicio-12.component";
import { Ejercicio13Component } from "./ejercicio-13/ejercicio-13.component";*/
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ LoginComponent,CommonModule,FormsModule,RouterOutlet, MatButtonModule, ToolbarComponent, MatIconModule, MatMenuModule, MatToolbarModule, NavbarComponent, PageContainerComponent/*, Ejercicio01Component, Ejercicio02Component, Ejercicio03Component, Ejercicio04Component, Ejercicio05Component, Ejercicio06Component, Ejercicio07Component, Ejercicio08Component, Ejercicio09Component, Ejercicio10Component, Ejercicio11Component, Ejercicio12Component, Ejercicio13Component*/],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ManualEjerciciosAngular - dani';


  
  sidebarVisible: boolean = true; // Estado del sidebar


  isLoginPage = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.url === '/login';
      }
    });
  }

  logout(): void {
    // Aquí se puede manejar el logout, como eliminar el token o limpiar el estado
    localStorage.removeItem('token');  // Ejemplo de eliminar un token

    // Redirigir al login después de hacer logout
    this.router.navigate(['/login']);
  }
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible; // Alternar visibilidad
  }

  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}