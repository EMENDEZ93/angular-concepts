import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductHeroku } from './getservice/productheroku.models';

@Injectable({
  providedIn: 'root'
})
export class GetservicebyidService {

  constructor(private http: HttpClient) { }

  getProductById(id: string) {
    return this.http.get<ProductHeroku>(`https://young-sands-07814.herokuapp.com/api/products/${id}`);
  }

}
