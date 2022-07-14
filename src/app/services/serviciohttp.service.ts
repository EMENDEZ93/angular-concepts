import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ServiciohttpService {

  constructor(private http: HttpClient) { 
  }

  getAll() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

}
