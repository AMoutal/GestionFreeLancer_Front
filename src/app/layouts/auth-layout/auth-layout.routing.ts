import { Routes } from '@angular/router';
import { AccueilComponent } from 'src/app/pages/accueil/accueil/accueil.component';
import { LoginFreelancerComponent } from 'src/app/pages/login-freelancer/login-freelancer.component';
import { LoginJobOwnerComponent } from 'src/app/pages/login-job-owner/login-job-owner.component';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'loginf',          component: LoginFreelancerComponent },
    { path: 'loginj',          component: LoginJobOwnerComponent },
    { path: 'register',       component: RegisterComponent }, 
    { path: 'accueil',        component: AccueilComponent }
];
