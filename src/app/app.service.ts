import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  authenticated=false;
  responseAll:any;
  isAdmin=false;
  isSuperuser=false;
  constructor(private httpClient:HttpClient) { }
  authenticate(credentials, callback)
  {
      const headers = new HttpHeaders(
          credentials ? { authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) } : {});
            console.log("machin");
            console.log(headers.get("authorization"));
            console.log(credentials);                   
          this.httpClient.get("http://localhost:8080/login/user", { headers: headers }).subscribe(
          response => 
          {
              console.log("response : " + response);
              this.responseAll = response;
              if (this.responseAll['username'] != null)
              {
                  console.log("isAdmin= "+this.isAdmin);
                  this.authenticated = true;
                  for (let r of this.responseAll['roles'])
                  {
                      if (r['libelle'] == "admin") 
                      {
                          this.isAdmin = true;
                      }
                      if (r['libelle'] == "superuser") 
                      {
                          this.isSuperuser = true;
                      }
                  }
              }
              return callback && callback();
          });
  }

}