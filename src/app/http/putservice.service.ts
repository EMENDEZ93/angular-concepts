import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductHeroku, ProductHerokuDto, UpdateProductHeroku } from './getservice/productheroku.models';

@Injectable({
  providedIn: 'root'
})
export class PutserviceService {

  constructor(private http: HttpClient) { }

  updateProduct(id: string, product: UpdateProductHeroku) {
    return this.http.put<ProductHeroku>(`https://young-sands-07814.herokuapp.com/api/products/${id}`, product);
  }

}
