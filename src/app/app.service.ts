import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppService
{

    authenticated = false;
    responseAll: any;
    isAdmin = false;
    isFreelancer = false;
    isJobowner = false;
    idUserStock:any;
    constructor(private httpClient: HttpClient) { }
    authenticate(type: string, credentials, callback)
    {
        const headers = new HttpHeaders(
            credentials ? { authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) } : {});
        console.log(headers.get("authorization"));
        console.log(credentials);
        this.httpClient.get("http://localhost:8080/login/" + type, { headers: headers }).subscribe(
            response => 
            {
                console.log("response : " + response);
                this.responseAll = response;
                this.idUserStock=this.responseAll['idUser'];
                if (this.responseAll['username'] != null)
                {
                    this.authenticated = true;
                    for (let r of this.responseAll['roles'])
                    { console.log(r['libelle'])
                        if (r['libelle'] == "admin") 
                        {
                            this.isAdmin = true;
                        }
                        if (r['libelle'] == "freelancer") 
                        {
                            this.isFreelancer = true;
                        }
                        if (r['libelle'] == "jobowner") 
                        {
                            this.isJobowner = true;
                        }
                    }
                }
                console.log("isAdmin= " + this.isAdmin);
                console.log("isFreelancer= " + this.isFreelancer);
                console.log("isJobowner= " + this.isJobowner);

                if (type == "user" && !this.isAdmin)
                {
                    this.authenticated = false;
                }
                return callback && callback();
            });
    }

}