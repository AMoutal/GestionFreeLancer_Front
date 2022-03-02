import { Routes } from '@angular/router';
import { AccueilComponent } from 'src/app/pages/accueil/accueil/accueil.component';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent }, 
    { path: 'accueil',        component: AccueilComponent }
];
