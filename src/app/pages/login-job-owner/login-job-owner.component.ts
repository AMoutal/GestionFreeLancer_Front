import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'app-login-job-owner',
    templateUrl: './login-job-owner.component.html',
    styleUrls: ['./login-job-owner.component.css']
})
export class LoginJobOwnerComponent implements OnInit
{
    credentials = { username: '', password: '' };
    constructor(private appService: AppService, private httpClient: HttpClient, private router: Router)
    { }

    login()
    {
        this.appService.authenticate("jobOwner", this.credentials, () =>
        {
            this.router.navigateByUrl("/dashboard")
        });
        return false;
    }

    ngOnInit(): void
    {
    }

}
