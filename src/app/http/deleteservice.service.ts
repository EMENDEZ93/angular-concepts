import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductHeroku } from './getservice/productheroku.models';

@Injectable({
  providedIn: 'root'
})
export class DeleteserviceService {

  constructor(private http: HttpClient) { }

  deleteProduct(id: string) {
    return this.http.delete<boolean>(`https://young-sands-07814.herokuapp.com/api/products/${id}`);
  }

}
