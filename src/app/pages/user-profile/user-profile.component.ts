import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Freelancer } from 'src/app/models/freelancer';
import { JobOwner } from 'src/app/models/job-owner';
import { Utilisateur } from 'src/app/models/utilisateur';
import { FreelancerService } from 'src/app/services/freelancer.service';
import { JobOwnerService } from 'src/app/services/job-owner.service';

import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  freelancers:[];
  utilisateurs:any;
  utilisateur:Utilisateur = new Utilisateur();
  freelancer:Freelancer=new Freelancer();
  jobowner:JobOwner=new JobOwner();
  idUserStock:any;
  constructor(private utilisateurService:UtilisateurService, private router:Router, private appService:AppService, private freelancerService:FreelancerService, private jobownerService:JobOwnerService) { }

  ngOnInit() {

  this.idUserStock=this.appService.idUserStock;
  console.log("user profile " + this.idUserStock)
  this.findOne(this.idUserStock);
  }

  findOne(id:number){
    this.freelancerService.findOne(id).subscribe(data => {this.freelancer = data; console.log(this.freelancer.username)}); 
  this.jobownerService.findOne(id).subscribe(data => {this.jobowner = data;}); 
  }


  editUser(user:Utilisateur){

    this.router.navigate(['/user-profile/edit', user.idUser]);
  }

  public authoritiesF():boolean{
    console.log("F" +this.appService.isFreelancer)
    return this.appService.isFreelancer
  }

  public authoritiesJ():boolean{
    console.log("J" + this.appService.isJobowner)
    return this.appService.isJobowner
  }


}
