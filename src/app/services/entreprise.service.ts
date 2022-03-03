import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EntrepriseService
{
    private baseURL = "http://localhost:8080/entreprise";
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
    public save(entreprise: any): Observable<any>
    {
        return this.httpClient.post(this.baseURL, entreprise);
    }
    public findOne(id: number): Observable<any>
    {
        return this.httpClient.get(this.baseURL + "/" + id); // http://localhost:8080/users/5
    }

    public update(entreprise: any): Observable<any>
    {
        let entrepriseParse = JSON.parse(entreprise);
        return this.httpClient.put(this.baseURL + "/" + entrepriseParse.idEntreprise, entrepriseParse);
    }
}
