import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  readShops(): Observable<any> {

    const apiUrl = "http://localhost:3001/todoSs";

    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }

  readShop(id:any): Observable<any> {

    const apiUrl = "http://localhost:3001/todoS/" + id;

    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }

  createShop(data:any): Observable<any> {

    const apiUrl = "http://localhost:3001/todoS/";

    return this.http.post(apiUrl, data, httpOptions).pipe(
      catchError(this.handleError));

  }

  updateShop(id:any, data:any) : Observable<any> {

    const apiUrl = "http://localhost:3001/todoS/" + id;

    return this.http.put(apiUrl, data, httpOptions).pipe(
      catchError(this.handleError));
  }

  deleteShop(id:any) : Observable<any> {

    const apiUrl = "http://localhost:3001/todoS/" + id;

    return this.http.delete(apiUrl, httpOptions).pipe(
      catchError(this.handleError));
  }


  readCategories(): Observable<any> {

    const apiUrl = "http://localhost:3001/todoCs";

    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }

  readCategory(id:any): Observable<any> {

    const apiUrl = "http://localhost:3001/todoC/" + id;

    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }

  createCategory(data:any): Observable<any> {

    const apiUrl = "http://localhost:3001/todoC/";

    return this.http.post(apiUrl, data, httpOptions).pipe(
      catchError(this.handleError));

  }

  updateCategory(id:any, data:any) : Observable<any> {

    const apiUrl = "http://localhost:3001/todoC/" + id;

    return this.http.put(apiUrl, data, httpOptions).pipe(
      catchError(this.handleError));
  }

  deleteCategory(id:any) : Observable<any> {

    const apiUrl = "http://localhost:3001/todoC/" + id;

    return this.http.delete(apiUrl, httpOptions).pipe(
      catchError(this.handleError));
  }

  readProducts(): Observable<any> {

    const apiUrl = "http://localhost:3001/todoPs";

    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }

  readProduct(id:any): Observable<any> {

    const apiUrl = "http://localhost:3001/todoP/" + id;

    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }

  createProduct(data:any): Observable<any> {

    const apiUrl = "http://localhost:3001/todoP/";

    return this.http.post(apiUrl, data, httpOptions).pipe(
      catchError(this.handleError));

  }

  updateProduct(id:any, data:any) : Observable<any> {

    const apiUrl = "http://localhost:3001/todoP/" + id;

    return this.http.put(apiUrl, data, httpOptions).pipe(
      catchError(this.handleError));
  }

  deleteProduct(id:any) : Observable<any> {

    const apiUrl = "http://localhost:3001/todoP/" + id;

    return this.http.delete(apiUrl, httpOptions).pipe(
      catchError(this.handleError));
  }

  doneCategory(id:any) : Observable<any> {

    const apiUrl = "http://localhost:3001/todoC/" + id + "/done";

    return this.http.post(apiUrl, httpOptions).pipe(
      catchError(this.handleError));
  }

  

}
