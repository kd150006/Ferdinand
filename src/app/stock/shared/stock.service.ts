import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Stock } from './stock.model';
import { MessageService } from './../../messages/shared/message.service';
import { GlobalVar } from './../../global';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StockService {
  private baseUrl = GlobalVar.BASE_API_URL + '/stocks';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getStocks(): Observable<Stock[]> {
    return this.http
      .get<Stock[]>(this.baseUrl)
      .pipe(
        tap(stocks => this.log(`fetched stocks`)),
        catchError(this.handleError('getStocks', []))
      );
  }

  /* GET stock by id. Will 404 if id not found */
  getStock(id: number): Observable<Stock> {
    const url = `${this.baseUrl}/${id}`;
    return this.http
      .get<Stock>(url)
      .pipe(
        tap(_ => this.log(`fetched stock id=${id}`)),
        catchError(this.handleError<Stock>(`getStock id=${id}`))
      );
  }
  /** PUT **/
  /*PUT: update a stock on the server */
  updateStock(stock: Stock): Observable<Stock> {
    const url = `${this.baseUrl}/${stock.id}`;
    return this.http
      .put(url, stock, httpOptions)
      .pipe(
        tap(_ => this.log(`updated stock id=${stock.id}`)),
        catchError(this.handleError<any>('updateStock'))
      );
  }

  /** POST **/
  /*POST: create a new stock on the server */
  createStock(stock: Stock) {
  const url = `${this.baseUrl}`;
  return this.http
    .post(url, stock, httpOptions)
    .pipe(
      tap(_ => this.log(`created stock id=${stock.id}`)),
      catchError(this.handleError<any>('createStock'))
    );
  }
  /** DELETE **/
  /* DELETE: delete the stock from the server */
  deleteStock(stock: Stock | number): Observable<Stock> {
    const id = typeof stock === 'number' ? stock : stock.id;
    const url = `${this.baseUrl}/${id}`;

    return this.http
      .delete<Stock>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`deleted stock id=${id}`)),
        catchError(this.handleError<Stock>('deleteStock'))
      );
  }
  /** **/
  /*
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /* Log a Stock servivce message with the MessageService */
  private log(message: string) {
    this.messageService.add('Stock Service: ' + message);
  }
}
