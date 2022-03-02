import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'app-login-freelancer',
    templateUrl: './login-freelancer.component.html',
    styleUrls: ['./login-freelancer.component.css']
})
export class LoginFreelancerComponent implements OnInit
{
    credentials = { username: '', password: '' };
    constructor(private appService: AppService, private httpClient: HttpClient, private router: Router)
    { }

    login()
    {
        this.appService.authenticate("freelancer", this.credentials, () =>
        {
            this.router.navigateByUrl("/dashboard")
        });
        return false;
    }
    ngOnInit(): void
    {
    }

}
