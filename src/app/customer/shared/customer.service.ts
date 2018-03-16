import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Customer } from './customer.model';
import { MessageService } from './../../messages/shared/message.service';
import { GlobalVar } from './../../global';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CustomerService {
  private apiUrl = GlobalVar.BASE_API_URL + '/customers';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}
  /////// REST METHODS ///////
  /** GET **/
  /* GET customers from the server */
  getCustomers(): Observable<Customer[]> {
    return this.http
      .get<Customer[]>(this.apiUrl)
      .pipe(
        tap(users => this.log(`fetched customers`)),
        catchError(this.handleError('getCustomers', []))
      );
  }
  /* GET product by id. Will 404 if id not found */
  getCustomer(id: number): Observable<Customer> {
    const url = `${this.apiUrl}/id/${id}`;
    return this.http
      .get<Customer>(url)
      .pipe(
        tap(_ => this.log(`fetched customer id=${id}`)),
        catchError(this.handleError<Customer>(`getCustomer id=${id}`))
      );
  }
  /** PUT **/
  updateCustomer(customer: Customer): Observable<Customer> {
    const url = `${this.apiUrl}/${customer.id}`;
    return this.http
      .put(url, customer, httpOptions)
      .pipe(
        tap(_ => this.log(`updated user id=${customer.id}`)),
        catchError(this.handleError<any>('updateUser'))
      );
  }
  /** POST **/
  /*POST: create a product on the server */
  createCustomer(customer: Customer) {
    const url = `${this.apiUrl}`;
    return this.http
      .post(url, customer, httpOptions)
      .pipe(
        tap(_ => this.log(`created customer id=${customer.id}`)),
        catchError(this.handleError<any>('createCustomer'))
      );
  }
  /** DELETE **/
  /* DELETE: delete the product from the server */
  deleteCustomer(customer: Customer | number): Observable<Customer> {
    const id = typeof customer === 'number' ? customer : customer.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http
      .delete<Customer>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`deleted customer id=${id}`)),
        catchError(this.handleError<Customer>('deleteCustomer'))
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
    this.messageService.add('Customer Service: ' + message);
  }
}
