import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioaService {

  arrayString: string[] = [];

  constructor() { }
 
  // la logica debe estar en los servicios de angular
  addString(item: string) {
    this.arrayString.push(item);
  }

  getArrayString() {
    return this.arrayString;
  }

}
