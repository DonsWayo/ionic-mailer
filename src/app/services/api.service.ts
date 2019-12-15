import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  demoEndpoint = "http://localhost:3000/"

  constructor(private readonly httpClient: HttpClient) { }

  public initConnection(): Observable<any> {
    return this.httpClient.post<any>(
      this.demoEndpoint + 'imap-client', {}, { observe: 'response' });
}

  public getInbox(): Observable<any> {
      return this.httpClient.get(
        this.demoEndpoint + 'imap-client',{ observe: 'body' });
  }
}
