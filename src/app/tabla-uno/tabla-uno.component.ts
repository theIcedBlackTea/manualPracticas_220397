import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import 'datatables.net';
import { DataTableDirective } from 'angular-datatables';
import type Settings  from 'datatables.net';

@Component({
  selector: 'app-tabla-uno',  // Aquí cambiamos el selector a tabla-uno
  templateUrl: './tabla-uno.component.html',
  styleUrls: ['./tabla-uno.component.css']
})
export class TablaUnoComponent implements OnInit, OnDestroy {
  dtOptions: Settings = {};
  dtTrigger: Subject<any> = new Subject();

  ejercicios = [
    { nombre: 'Ejercicio 1', descripcion: 'Componente básico en Angular', dificultad: 'Fácil' },
    { nombre: 'Ejercicio 2', descripcion: 'Actualización de clase en un componente', dificultad: 'Media' },
    { nombre: 'Ejercicio 3', descripcion: 'Composición de componentes', dificultad: 'Difícil' },
  ];

  ngOnInit(): void {
    // Inicializa las opciones de DataTables
    this.dtOptions = {
      paging: true,
      searching: true,
      ordering: true,
      info: true
    };
  }

  ngOnDestroy(): void {
    // Destruir el observable cuando se destruya el componente
    this.dtTrigger.unsubscribe();
  }
}
