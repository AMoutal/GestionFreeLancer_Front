import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private baseURL="http://localhost:8080/tests";
  constructor(private httpClient: HttpClient) { 
  }

  public findAll(): Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }

  public save(test:any): Observable<any>{
    return this.httpClient.post(this.baseURL,test);
  }

}
