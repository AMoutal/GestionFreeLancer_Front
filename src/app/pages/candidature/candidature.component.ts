import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Candidature } from 'src/app/models/candidature';
import { Freelancer } from 'src/app/models/freelancer';
import { Projet } from 'src/app/models/projet';
import { CandidatureService } from 'src/app/services/candidature.service';
import { FreelancerService } from 'src/app/services/freelancer.service';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent implements OnInit {

  candidature = new Candidature()
  
  projet = new Projet()
  freelancer = new Freelancer()
  
  constructor(public candidatureService:CandidatureService,public router:Router,public appService:AppService, public projetService :ProjetService,public freelancerService:FreelancerService) { }

  ngOnInit(): void {
    

}

  validerCandidature(){
    
    let projetId=localStorage.getItem("projetId");

    let objetProjet = localStorage.getItem("projet");
    
    
    
    if(!projetId){
      alert("Invalid Action !!");
      this.router.navigate(['/list-projet']);
      return;

  }
  
    
  


this.freelancerService.findOne(this.appService.idUserStock).subscribe(data=>{
  this.freelancer=data; 
  this.projetService.findOne(+projetId).subscribe(data=>{
    
    this.projet= data
    this.candidature.freelancer = this.freelancer;
    this.candidature.projet=  this.projet;


    this.candidatureService.save(this.candidature);


    

  });

})


    
  
    }
    


  }

  


