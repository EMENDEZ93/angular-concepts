import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductHeroku } from './getservice/productheroku.models';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RetryserviceService {

  constructor(private http: HttpClient) { }

  getProductById(id: string) {
    return this.http.get<ProductHeroku>(`https://young-sands-07814.herokuapp.com/api/products/${id}`)
    .pipe(
      retry(3)
    );
  }

}
