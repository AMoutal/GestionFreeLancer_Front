import { Component, OnInit } from '@angular/core';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-liste-projet',
  templateUrl: './liste-projet.component.html',
  styleUrls: ['./liste-projet.component.css']
})
export class ListeProjetComponent implements OnInit {

  listprojet:any;
  constructor(public projetsService:ProjetService) { }

  ngOnInit(): void {
    this.findAll()
  }

      findAll(){
        this.projetsService.findAll().subscribe(data => {this.listprojet = data;}); // data : objet qui stocke les données des utilisateurs
      }

}

