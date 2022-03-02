import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {
  private baseURL="http://localhost:8080/freelancers"
  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL);  
  }

  public save(freelancer:any):Observable<any>{
    return this.httpClient.post(this.baseURL,freelancer);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id); 
  }

  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id)
  }
  public update(freelancer:any):Observable<any>{
    var freelancerParse = JSON.parse(freelancer);
    return this.httpClient.put(this.baseURL+"/"+freelancerParse.idUser, freelancerParse);
  }
}
