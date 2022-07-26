import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductHeroku } from './getservice/productheroku.models';

@Injectable({
  providedIn: 'root'
})
export class ParamsurlserviceService {

  constructor(private http: HttpClient) { }

  paramUrl(limit: number, offset: number) {
    return this.http.get<ProductHeroku[]>(`https://young-sands-07814.herokuapp.com/api/products`, {
      params: { limit, offset }
    });
  }


}
