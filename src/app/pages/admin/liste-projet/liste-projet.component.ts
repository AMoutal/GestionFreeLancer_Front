import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/models/projet';
import { Router } from '@angular/router';
import { ProjetService } from 'src/app/services/projet.service';
import { AppService } from 'src/app/app.service';
import { CandidatureService } from 'src/app/services/candidature.service';
import { Candidature } from 'src/app/models/candidature';

@Component({
  selector: 'app-liste-projet',
  templateUrl: './liste-projet.component.html',
  styleUrls: ['./liste-projet.component.css']
})
export class ListeProjetComponent implements OnInit {

  listprojet:any;
  projet:Projet = new Projet();
  canditature:Candidature = new Candidature;
  constructor(private appService:AppService,private router:Router ,public projetService:ProjetService, public serviceCandidature:CandidatureService) { }

  ngOnInit(): void {
    this.findAll()
  }

      findAll(){
        this.projetService.findAll().subscribe(data => {this.listprojet = data;}); // data : objet qui stocke les données des utilisateurs
      }

      deleteProjet(id:number){
        this.projetService.delete(id).subscribe(()=>{this.findAll()});
      }
    
      editProjet(p:Projet){
        localStorage.removeItem("projetId");
        localStorage.setItem("projetId", p.idProjet.toString());
        
        this.router.navigate(['/admin-projet/edit-projet']);
      }

      candidater(p:Projet){
        
        localStorage.setItem("projetId", p.idProjet.toString());
        this.router.navigate(['/candidater']);
      }

      public authoritiesF():boolean{
        console.log("F" +this.appService.isFreelancer)
        return this.appService.isFreelancer
      }
    
      public authoritiesJ():boolean{
        console.log("J" + this.appService.isJobowner)
        return this.appService.isJobowner
      }
    
      authenticated(){
        return this.appService.authenticated;
      }

}

