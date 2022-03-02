import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluationEntrepriseService {

  
  private baseURL="http://localhost:8080/evaluationentreprise"
  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL);  
  }

  public save(evaluationentreprise:any):Observable<any>{
    return this.httpClient.post(this.baseURL,evaluationentreprise);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id); 
  }

  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id)
  }
  public update(evaluationentreprise:any):Observable<any>{
    var evaluationentrepriseParse = JSON.parse(evaluationentreprise);
    return this.httpClient.put(this.baseURL+"/"+evaluationentrepriseParse.idEvaluationEntreprise, evaluationentrepriseParse);
  }
}
