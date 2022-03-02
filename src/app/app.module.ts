import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injectable, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppService } from './app.service';
import { CandidatureService } from './services/candidature.service';
import { RoleService } from './services/role.service';
import { JobOwnerService } from './services/job-owner.service';
import { TestService } from './services/test.service';
import { ProjetService } from './services/projet.service';
import { ResultatService } from './services/resultat.service';
import { FreelancerService } from './services/freelancer.service';
import { EvaluationCandidatService } from './services/evaluation-candidat.service';
import { EvaluationEntrepriseService } from './services/evaluation-entreprise.service';
import { UtilisateurService } from './services/utilisateur.service';
import { EntrepriseService } from './services/entreprise.service';
import { LoginFreelancerComponent } from './pages/login-freelancer/login-freelancer.component';
import { LoginJobOwnerComponent } from './pages/login-job-owner/login-job-owner.component';


@Injectable()
export class XhrInterceptor implements HttpInterceptor {
intercept(req:HttpRequest<any>, next: HttpHandler){
  const xhr=req.clone({
    headers: req.headers.set('X-Requested-With','XMLHttpRequest')
  });
  return next.handle(xhr);
}
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    LoginFreelancerComponent,
    LoginJobOwnerComponent
  ],
  providers: [
    AppService,
    CandidatureService,
    RoleService,
    JobOwnerService,
    TestService,
    ProjetService,
    ResultatService,
    FreelancerService,
    EvaluationCandidatService,
    EvaluationEntrepriseService,
    UtilisateurService,
    EntrepriseService,
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
