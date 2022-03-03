import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private baseURL="http://localhost:8080/users";
  
  constructor(private httpClient:HttpClient) { } 

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL);  
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id); 
  }
  public save(user:any):Observable<any>{
    return this.httpClient.post(this.baseURL,user);
  }
  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }
  public update(user:any):Observable<any>{
    var userParse = JSON.parse(user);
    return this.httpClient.put(this.baseURL+"/"+userParse.idUser, userParse);
  }
  
}
