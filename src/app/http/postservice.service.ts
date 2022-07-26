import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductHeroku, ProductHerokuDto } from './getservice/productheroku.models';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(private http: HttpClient) { }

  createProduct(product: ProductHerokuDto) {
    return this.http.post<ProductHeroku>('https://young-sands-07814.herokuapp.com/api/products', product);
  }

}
