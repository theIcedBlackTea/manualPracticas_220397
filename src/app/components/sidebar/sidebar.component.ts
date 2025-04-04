import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

interface MenuItem {
  text: string;
  icon: string;
  route?: string;
  children?: MenuItem[];
  expanded?: boolean;
  extraDetails?: string;
  description?: string;
  showDescription?: boolean; // Control de visibilidad de la descripción
  showUnitName?: boolean; // Control de visibilidad del nombre de la unidad
  showExerciseName?: boolean; // Control de visibilidad del nombre del ejercicio
  unitName?: string;
  exerciseName?: string; // Control de visibilidad de la descripción
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, MatListModule, MatExpansionModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  @Input() sidebarVisible: boolean = true;

  menuItems: MenuItem[] = [
    {
      text: 'Dashboard',
      icon: 'dashboard',
      route: '/home'
    },
    {
      text: 'Unidad 1',
      icon: 'school',
      expanded: false,
      children: [
        { text: 'Ejercicio 1', icon: 'chevron_right', route: '/ejercicio-1', description: 'Los componentes son los elementos básicos para cualquier aplicación Angula:TSclass, Template, y CSS.', showDescription: false, extraDetails: 'En Angular, puedes usar todos los CSS y HTML compatibles con el navegador que estén disponibles. Si lo deseas, puedes almacenar tu plantilla y tus estilos en archivos separados.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Componentes en Angular'},

        { text: 'Ejercicio 2', icon: 'chevron_right', route: '/ejercicio-2', description: 'En Angular, la lógica y el comportamiento del componente se definen en la clase TypeScript del componente.', showDescription: false, extraDetails: 'Este es solo el comienzo de lo que es posible con las plantillas Angular, sigue aprendiendo para descubrir más.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Actualización de la clase de un componente'},

        { text: 'Ejercicio 3', icon: 'chevron_right', route: '/ejercicio-3', description: 'La propiedad selector de la configuración del componente le proporciona un nombre para usar al hacer referencia al componente en otra plantilla.', showDescription: false, extraDetails: 'Puedes utilizar tanto marcado HTML y tantos componentes como necesites para hacer realidad la idea de tu aplicación.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Composición de componentes' },

        { text: 'Ejercicio 4', icon: 'chevron_right', route: '/ejercicio-4', description: 'Decidir qué mostrar en la pantalla para un usuario es una tarea común en el desarrollo de aplicaciones.', showDescription: false, extraDetails: 'Este tipo de funcionalidad se denomina flujo de control condicional. A continuación, aprenderá a repetir elementos en una plantilla. ', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Flujo de control en componentes - @IF' },

        { text: 'Ejercicio 5', icon: 'chevron_right', route: '/ejercicio-5', description: 'A menudo, al crear aplicaciones web, es necesario repetir algún código una cantidad específica de veces; por ejemplo, dada una matriz de nombres, es posible que desee mostrar cada nombre en una etiqueta <p>', showDescription: false, extraDetails: 'Este tipo de funcionalidad se denomina flujo de control. A continuación, aprenderá a personalizar los componentes y comunicarse con ellos. Por cierto, hasta ahora está haciendo un gran trabajo.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Flujo de control en componentes - @FOR' },

        { text: 'Ejercicio 6', icon: 'chevron_right', route: '/ejercicio-6', description: 'Usando la vinculación de propiedades para establecer dinámicamente valores para propiedades y atributos. ', showDescription: false, extraDetails: 'Puede realizar acciones como alternar funciones de botones, establecer rutas de imágenes mediante programación y compartir valores entre componentes.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Vinculación de propiedades en Angular  '},

        { text: 'Ejercicio 7', icon: 'chevron_right', route: '/ejercicio-7', description: 'El manejo de eventos permite funciones interactivas en aplicaciones web. ', showDescription: false, extraDetails: 'Le brinda a usted, como desarrollador, la capacidad de responder a acciones del usuario, como pulsaciones de botones, envíos de formularios y más.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Manejo de eventos'},

        { text: 'Ejercicio 8', icon: 'chevron_right', route: '/ejercicio-8', description: 'A veces, el desarrollo de aplicaciones requiere que envíe datos a un componente. ', showDescription: false, extraDetails: 'Estos datos se pueden usar para personalizar un componente o quizás enviar información de un componente principal a un componente secundario.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Comunicación de componentes con @INPUT' },

        { text: 'Ejercicio 9', icon: 'chevron_right', route: '/ejercicio-9', description: 'Quizás se hizo clic en un botón, se agregó o eliminó un elemento de una lista o se produjo alguna otra actualización importante.', showDescription: false, extraDetails: 'Al trabajar con componentes, puede ser necesario notificar a otros componentes que algo ha pasó vaya.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Comunicación de componentes con @OUTPUT' },

        { text: 'Ejercicio 10', icon: 'chevron_right', route: '/ejercicio-10', description: 'A veces, en el desarrollo de aplicaciones, terminas con muchos componentes que necesitas referenciar en tu aplicación.', showDescription: false, extraDetails: 'Pero algunos de ellos no necesitan cargarse de inmediato por varias razones.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Vistas diferibles' },
        
        { text: 'Ejercicio 11', icon: 'chevron_right', route: '/ejercicio-11', description: 'La optimización de imágenes puede ser un tema complejo, pero Angular se encarga de la mayor parte de este tema por ti, con la directiva NgOptimizedImage.', showDescription: false, extraDetails: 'Usaremos NgOptimizedImage para garantizar que tus imágenes se carguen de manera eficiente.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Optimización de imágenes' },

        { text: 'Ejercicio 12', icon: 'chevron_right', route: '/ejercicio-12', description: 'En la mayoría de las aplicaciones, llega un momento en el que se requiere más de una página', showDescription: false, extraDetails: 'Entonces el enrutamiento se convierte en una parte importante del rendimiento para los usuarios.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Descripción general de enrutamiento (Overview)' },
      ]
    },
    {
      text: 'Unidad 2',
      icon: 'folder',
      expanded: false,
      children: [
        { text: 'Tabla 1', icon: 'chevron_right', route: '', description: 'Primera tabla mantenida a través de forma estática', showDescription: false, extraDetails: 'Le pregunté a mi grupo su serie o película favorita.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 2', exerciseName: 'Tabla 1: Estática con temática de Pelis y Series' },
        { text: 'Tabla 2', icon: 'chevron_right', route: '', description: 'Segunda tabla mantenida a través de forma estática', showDescription: false, extraDetails: 'Le pregunté a mi grupo si apoyaban al Team Cap o Team Iron-Man.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 2', exerciseName: 'Tabla 1: Estática con temática de Pelis y Series' },
        { text: 'Tabla 3', icon: 'chevron_right', route: '', description: 'Tercera tabla mantenida a través de forma estática', showDescription: false, extraDetails: 'Alch no me acuerdo de qué era ésta tabla.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 2', exerciseName: 'Tabla 4: Estática con temática de Pelis y Series' },
        { text: 'Tabla 4', icon: 'chevron_right', route: '', description: 'Tercera tabla mantenida a través de forma estática', showDescription: false, extraDetails: 'Alch no me acuerdo de qué era ésta tabla.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 2', exerciseName: 'Tabla 4: Estática con temática de Pelis y Series' },
      ]
    }
  ];

  activeRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects;
        this.menuItems.forEach(item => {
          if (item.children) {
            item.expanded = item.children.some(child =>
              this.activeRoute.startsWith(child.route || '')
            );
          }
        });
      }
    });
  }

  toggleDescription(item: MenuItem) {
  if (item) {
    item.showDescription = !item.showDescription;

    if (item.route) {
      this.router.navigate([item.route]); // Redirige a la ruta del ejercicio
    }
  }
}

  // Verificar si un ítem está activo
  isActive(route: string): boolean {
    return this.activeRoute === route;
  }
}
