import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injectable, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { EntrepriseComponent } from './pages/entreprise/entreprise.component';
import { EditEntrepriseComponent } from './pages/edit-entreprise/edit-entreprise.component';
import { FreelancersComponent } from './pages/freelancers/freelancers.component';
import { TestComponent } from './pages/test/test.component';
import { ListeProjetComponent } from './pages/admin/liste-projet/liste-projet.component';
import { EditFreelancerComponent } from './pages/edit-freelancer/edit-freelancer.component';
import { EditTestComponent } from './pages/edit-test/edit-test.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { EditRecruteurComponent } from './pages/edit-recruteur/edit-recruteur.component';
import { EditProjetComponent } from './pages/edit-projet/edit-projet.component';
import { RegisterJobOwnerComponent } from './pages/register-job-owner/register-job-owner.component';
import { RegisterFreelancerComponent } from './pages/register-freelancer/register-freelancer.component';
import { CandidatureComponent } from './pages/candidature/candidature.component';


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
    ReactiveFormsModule,
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
    LoginJobOwnerComponent,
    EntrepriseComponent,
    FreelancersComponent,
    EditEntrepriseComponent,
    TestComponent,
    FreelancersComponent,
    EditFreelancerComponent,
    ListeProjetComponent,
    EditProjetComponent,
    EditTestComponent,
    EditRecruteurComponent,
    EditRecruteurComponent,
    EditProfileComponent,
    RegisterJobOwnerComponent,
    RegisterFreelancerComponent,
    CandidatureComponent
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
