import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/models/projet';
import { Router } from '@angular/router';
import { ProjetService } from 'src/app/services/projet.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-liste-projet',
  templateUrl: './liste-projet.component.html',
  styleUrls: ['./liste-projet.component.css']
})
export class ListeProjetComponent implements OnInit {

  listprojet:any;
  projet:Projet = new Projet();
  constructor(private appService:AppService,private router:Router ,public projetService:ProjetService) { }

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

}

