import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  demoEndpoint = "http://localhost:3000/"

  constructor(private readonly httpClient: HttpClient) { }

   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // POST
  post(url: string, data): Observable<any> {
    return this.httpClient.post<any>(this.demoEndpoint + url, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }  

  // GET
  getById(id): Observable<any> {
    return this.httpClient.get<any>(this.demoEndpoint + '/anytracking/' + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // GET
  get(url: string): Observable<any> {
    return this.httpClient.get<any>(this.demoEndpoint + url)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // PUT
  Updateany(id, data): Observable<any> {
    return this.httpClient.put<any>(this.demoEndpoint + '/anytracking/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // DELETE
  delete(id){
    return this.httpClient.delete<any>(this.demoEndpoint + '/anytracking/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // Error handling
  errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }

}
