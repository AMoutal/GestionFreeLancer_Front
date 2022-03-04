import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Entreprise } from 'src/app/models/entreprise';
import { Freelancer } from 'src/app/models/freelancer';
import { JobOwner } from 'src/app/models/job-owner';
import { Utilisateur } from 'src/app/models/utilisateur';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { FreelancerService } from 'src/app/services/freelancer.service';
import { JobOwnerService } from 'src/app/services/job-owner.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  editProfile: FormGroup;
  jobowner:JobOwner=new JobOwner();
  freelancer:Freelancer=new Freelancer();
  idUserStock:any;
 entreprises:Entreprise[];
  constructor(private jobownerService:JobOwnerService, private entrepriseService:EntrepriseService, private formBuilder:FormBuilder, private router:Router, private appService:AppService, private freelancerService:FreelancerService) { }

  ngOnInit(): void {
  this.loadEntreprise();
    this.idUserStock=this.appService.idUserStock;
    this.editProfile = this.formBuilder.group({
        idUser:[],
          username: [''],
          emailUser: [''],
          prenomUser: [''],
          nomUser: [''],
          metier: [''],
          password:[''],
          disponible:[],
          departement: [''], 
          entreprise: [] 
    });
  this.freelancerService.findOne(+this.idUserStock).subscribe(data => { this.editProfile.patchValue(data);  this.freelancer.password = ''; console.log(this.idUserStock)})
  this.jobownerService.findOne(+this.idUserStock).subscribe(data => { this.editProfile.patchValue(data); this.jobowner.password = ''})
  }


  loadEntreprise(){
    this.entrepriseService.findAll().subscribe(data => {this.entreprises = data;});
  } 

  updateProfileF()
  {
    console.log("update edit " + this.idUserStock)
      let varJSON = JSON.stringify(this.editProfile.value);
      this.freelancerService.update(varJSON).subscribe(() => {this.refresh(); });
  }

  updateProfileJ()
  {
      let varJSON = JSON.stringify(this.editProfile.value);
      this.jobownerService.update(varJSON).subscribe(() => { this.router.navigate(["user-profile"]); });
  }

  cancel()
  {
      this.router.navigate(["user-profile"]);
  }

  refresh(){
    this.router.navigateByUrl("user-profile");
  }

  public authoritiesF(){
    if(this.appService.isFreelancer==true){
      return false;
    } else {
      return true;
    }
  }

  public authoritiesJ(){
    if(this.appService.isJobowner==true){
      return false;
    } else {
      return true;
    }
  }

}
