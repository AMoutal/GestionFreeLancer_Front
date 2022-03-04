import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Projet } from 'src/app/models/projet';
import { ProjetService } from 'src/app/services/projet.service';


@Component({
  selector: 'app-edit-projet',
  templateUrl: './edit-projet.component.html',
  styleUrls: ['./edit-projet.component.css']
})
export class EditProjetComponent implements OnInit {

  editForm: FormGroup; 
  projet:Projet=new Projet();
  constructor(private router:Router,private formBuilder:FormBuilder, private projetService:ProjetService) { }

  ngOnInit(): void {

    let projetId=localStorage.getItem("projetId");
   
    if(!projetId){
      alert("Invalid Action !!");
      this.router.navigate(['/list-projet']);
      return;
  }
 
  this.editForm=this.formBuilder.group({
    idProjet:[],
    nom:[''],
    description:[''],
    dateDebut:[],
    dateFin:[],
    remuneration:[],
    etat:[]

  })

  this.projetService.findOne(+projetId).subscribe(data=>{this.editForm.patchValue(data)})

}

updateProjet(){
  var varJson=JSON.stringify(this.editForm.value);
  this.projetService.update(varJson).subscribe(() => {this.router.navigate(['/admin-projet'])});
}

cancel()
{
    this.router.navigate(["/list-projet"]);
}

}
