import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ProductType } from './product-type.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductTypeService {
  private baseUrl = 'http://localhost:52035/api/productTypes';

  constructor(
    private http: HttpClient
  ) { }

  getProductTypes(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(this.baseUrl);
  }
}
