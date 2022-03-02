import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  private baseURL="http://localhost:8080/candidature"
  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL);  
  }

  public save(candidature:any):Observable<any>{
    return this.httpClient.post(this.baseURL,candidature);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id); 
  }

  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id)
  }
  public update(candidature:any):Observable<any>{
    var candidatureParse = JSON.parse(candidature);
    return this.httpClient.put(this.baseURL+"/"+candidatureParse.idCandidature, candidatureParse);
  }
}