import { Component, OnInit, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-vida',
  templateUrl: './vida.component.html',
  styleUrls: ['./vida.component.css']
})
export class VidaComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  constructor() {
    // no correr procesos asincronos
    // ejecuta antes del render
    console.log("******* constructor ********")
  }

  ngOnDestroy(): void {
    // Corre cuando se elimina el componente

  }

  ngAfterViewInit(): void {
    // corre despues del render
    // manejo de componentes hijos
  }

  ngOnChanges(changes: SimpleChanges): void {
    // ejecuta antes/durante del render
    // cambios den los @Input
    console.log("******* ngOnChanges ********")
  }

  ngOnInit(): void {
    // ejecuta antes del render
    // corre una sola vez
  }

}
