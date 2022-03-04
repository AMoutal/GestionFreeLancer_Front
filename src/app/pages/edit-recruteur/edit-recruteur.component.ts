import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Entreprise } from 'src/app/models/entreprise';
import { JobOwner } from 'src/app/models/job-owner';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { JobOwnerService } from 'src/app/services/job-owner.service';

@Component({
  selector: 'app-edit-recruteur',
  templateUrl: './edit-recruteur.component.html',
  styleUrls: ['./edit-recruteur.component.css']
})
export class EditRecruteurComponent implements OnInit {

  editJobOwner: FormGroup;
  jobowner:JobOwner=new JobOwner();
  entreprises:Entreprise[];
  constructor(private router:Router,private formBuilder:FormBuilder, private jobownerService:JobOwnerService, private entrepriseService:EntrepriseService) { }

  ngOnInit(): void {
    this.loadEntreprise();
    let userId=localStorage.getItem("userId");
    console.log(userId)
    if(!userId){
      alert("Invalid Action !!");
      this.router.navigate(['/recruteurs']);
      return;
  }
  this.editJobOwner=this.formBuilder.group({
    idUser:[],
    nomUser:[''],
    prenomUser:[''],
    emailUser:[''],
    metier:[''],
    password:[''],
    departement:[''],
    entreprise:[]
  })
  this.jobownerService.findOne(+userId).subscribe(data=>{this.editJobOwner.patchValue(data)})
}

loadEntreprise(){
  this.entrepriseService.findAll().subscribe(data => {this.entreprises = data;});
}
updateJobOwner(){
  var varJson=JSON.stringify(this.editJobOwner.value);
  this.jobownerService.update(varJson).subscribe(() => {this.router.navigate(['/recruteurs'])});
}

cancel()
{
    this.router.navigate(["/recruteurs"]);
}
}