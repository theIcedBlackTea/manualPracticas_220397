import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-login',
  imports: [NavbarComponent, SidebarComponent, CommonModule, FormsModule, MatButtonModule, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoggedIn = false; // Controla si el usuario está "logueado"
  
    constructor(private router: Router) {}

  login(): void {
    // Aquí se puede manejar el logout, como eliminar el token o limpiar el estado// Ejemplo de eliminar un token

    // Redirigir al login después de hacer logout
    this.router.navigate(['/home']);
  }

  toggleNavbar() {
    this.isLoggedIn = !this.isLoggedIn; // Cambia el estado de logueo
  }

  getButtonLabel(): string {
    return this.isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'; // Cambia el texto del botón
  }
}
