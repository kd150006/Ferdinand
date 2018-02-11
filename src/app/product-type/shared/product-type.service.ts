import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


import { ProductType } from './product-type.model';


@Injectable()
export class ProductTypeService {
  private httpHeader = new HttpHeaders('application/json');
  private baseUrl = 'http://localhost:52035/api/';
  constructor(private httpService: HttpClient) { }

 public getAllProductTypes(): Promise<ProductType[]> {
    return this.httpService.get(this.baseUrl + 'productTypes', {headers: this.httpHeader})
                           .toPromise()
                           .then(response => response as ProductType[]);
  }
}
