import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './../../message.service';

import { Basket } from './basket.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BasketService {
  private baseUrl = 'http://localhost:52035/api/baskets';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  /** GET **/
  /* GET baskets from the server */
  getBaskets(): Observable<Basket[]> {
    return this.http
      .get<Basket[]>(this.baseUrl)
      .pipe(
        tap(baskets => this.log(`fetched baskets`)),
        catchError(this.handleError('getBaskets', []))
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
  /* Log a ProductService message with the MessageService */
  private log(message: string) {
    this.messageService.add('Basket Service: ' + message);
  }
}
