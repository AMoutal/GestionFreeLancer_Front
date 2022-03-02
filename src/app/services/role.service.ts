import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private baseURL="http://localhost:8080/roles";
  
  constructor(private httpClient:HttpClient) { }
  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL);  
  }

  public save(role:any):Observable<any>{
    return this.httpClient.post(this.baseURL,role);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id); 
  }

  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id)
  }

  public update(role:any):Observable<any>{
    var roleParse = JSON.parse(role);
    return this.httpClient.put(this.baseURL+"/"+roleParse.idRole, roleParse);
  }
}
