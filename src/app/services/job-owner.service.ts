import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobOwnerService {
    private baseURL = "http://localhost:8080/jobOwner";
    // injection de la dépendance qui nous permet d'utiliser les verbes http :GET,PUT,DELETE et POST
    constructor(private httpClient: HttpClient) { }
    public findAll(): Observable<any>
    {
        return this.httpClient.get(this.baseURL);  // http://localhost:8080/users
    }
    public delete(id: number): Observable<any>
    {
        return this.httpClient.delete(this.baseURL + "/" + id); // http://localhost:8080/users/5
    }
    public save(jobOwner: any): Observable<any>
    {
        return this.httpClient.post(this.baseURL, jobOwner);
    }
    public findOne(id: number): Observable<any>
    {
        return this.httpClient.get(this.baseURL + "/" + id); // http://localhost:8080/users/5
    }

    public update(jobOwner: any): Observable<any>
    {
        let jobOwnerParse = JSON.parse(jobOwner);
        return this.httpClient.put(this.baseURL + "/" + jobOwnerParse.idUser, jobOwnerParse);
    }
}
