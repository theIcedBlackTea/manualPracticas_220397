import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { Ejercicio01Component } from './ejercicio-01/ejercicio-01.component';
import { Ejercicio02Component } from './ejercicio-02/ejercicio-02.component';
import { Ejercicio03Component } from './ejercicio-03/ejercicio-03.component';
import { Ejercicio04Component } from './ejercicio-04/ejercicio-04.component';
import { Ejercicio05Component } from './ejercicio-05/ejercicio-05.component';
import { Ejercicio06Component } from './ejercicio-06/ejercicio-06.component';
import { Ejercicio07Component } from './ejercicio-07/ejercicio-07.component';
import { Ejercicio08Component } from './ejercicio-08/ejercicio-08.component';
import { Ejercicio09Component } from './ejercicio-09/ejercicio-09.component';
import { Ejercicio10Component } from './ejercicio-10/ejercicio-10.component';
import { Ejercicio11Component } from './ejercicio-11/ejercicio-11.component';
import { Ejercicio12Component } from './ejercicio-12/ejercicio-12.component';
import { Ejercicio13Component } from './ejercicio-13/ejercicio-13.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  
  // Rutas de ejercicios
  { path: 'ejercicio-1', component: Ejercicio01Component },
  { path: 'ejercicio-2', component: Ejercicio02Component },
  { path: 'ejercicio-3', component: Ejercicio03Component },
  { path: 'ejercicio-4', component: Ejercicio04Component },
  { path: 'ejercicio-5', component: Ejercicio05Component },
  { path: 'ejercicio-6', component: Ejercicio06Component },
  { path: 'ejercicio-7', component: Ejercicio07Component },
  { path: 'ejercicio-8', component: Ejercicio08Component },
  { path: 'ejercicio-9', component: Ejercicio09Component },
  { path: 'ejercicio-10', component: Ejercicio10Component },
  { path: 'ejercicio-11', component: Ejercicio11Component },
  { path: 'ejercicio-12', component: Ejercicio12Component },
  { path: 'ejercicio-13', component: Ejercicio13Component },
  

  {path: 'login', component: LoginComponent},

  // Ruta wildcard (404)
  { path: '**', redirectTo: '/login' }
];
