import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user.model';
import { MessageService } from './../../messages/shared/message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  private baseUrl = 'http://localhost:52035/api/users';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  /////// REST METHODS ///////
  /** GET **/
  /* GET users from the server */
  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.baseUrl)
      .pipe(
        tap(users => this.log(`fetched users`)),
        catchError(this.handleError('getUsers', []))
      );
  }
  /* GET product by id. Will 404 if id not found */
  getUser(id: number): Observable<User> {
    const url = `${this.baseUrl}/id/${id}`;
    return this.http
      .get<User>(url)
      .pipe(
        tap(_ => this.log(`fetched user id=${id}`)),
        catchError(this.handleError<User>(`getUser id=${id}`))
      );
  }
  /** PUT **/
  updateUser(user: User): Observable<User> {
    const url = `${this.baseUrl}/${user.id}`;
    return this.http
      .put(url, user, httpOptions)
      .pipe(
        tap(_ => this.log(`updated user id=${user.id}`)),
        catchError(this.handleError<any>('updateUser'))
      );
  }
  /** POST **/
  /*POST: create a product on the server */
  createUser(user: User) {
    const url = `${this.baseUrl}`;
    return this.http
      .post(url, user, httpOptions)
      .pipe(
        tap(_ => this.log(`created user id=${user.id}`)),
        catchError(this.handleError<any>('createUser'))
      );
  }
  /** DELETE **/
  /* DELETE: delete the product from the server */
  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.baseUrl}/${id}`;

    return this.http
      .delete<User>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`deleted product id=${id}`)),
        catchError(this.handleError<User>('deleteProduct'))
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
    this.messageService.add('User Service: ' + message);
  }
}
