import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductHeroku } from './getservice/productheroku.models';

@Injectable({
  providedIn: 'root'
})
export class GetserviceService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<ProductHeroku[]>('https://young-sands-07814.herokuapp.com/api/products');
  }

}
