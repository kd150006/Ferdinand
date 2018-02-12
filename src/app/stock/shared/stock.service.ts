import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Stock } from './stock.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StockService {
  private baseUrl = 'http://localhost:52035/api/stocks';

  constructor(
    private http: HttpClient
  ) { }

  getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.baseUrl);
  }
}
