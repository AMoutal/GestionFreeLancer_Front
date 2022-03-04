import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Entreprise } from 'src/app/models/entreprise';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
    selector: 'app-entreprise',
    templateUrl: './entreprise.component.html',
    styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit
{
    entreprises: any;         // roles: Role[]
    entreprise: Entreprise = new Entreprise();
    constructor(private appService:AppService, private entrepriseService: EntrepriseService, private router: Router) { }

    ngOnInit(): void
    {
        this.findAll();
    }
    findAll()
    {
        this.entrepriseService.findAll().subscribe(data => { this.entreprises = data; }); // data : objet qui stocke les données des utilisateurs
    }

    deleteEntreprise(id: number)
    {
        this.entrepriseService.delete(id).subscribe(() => { this.findAll() }) // () => {this.findAll()} 
    }

    saveEntreprise()
    {
        // On utilise la fonction save
        // MAJ de la liste des utilisateurs dans la page web
        // Vider le formulaire  
        this.entrepriseService.save(this.entreprise).subscribe(() =>
        {
            this.findAll();  // MAJ de la liste des utilisateurs
            this.entreprise = new Entreprise(); // Vider le formulaire
        })
    }

    editEntreprise(entreprise: Entreprise): void
    {
        // 1. Creer une variable locale
        // 2. Stocker cette variable dans le cache du navigateur (local storage)

        localStorage.removeItem("entrepriseId"); // on supprime la precedente valeur par precaution
        localStorage.setItem("entrepriseId", entreprise.idEntreprise.toString());
        // editUserId = "3"

        this.router.navigate(['/editEntreprise']); // localhost:4200/#/base/editUser/5
        // navigation entre le composant forms.component.ts et editUser.component.ts dans lequel on va editer un utilisateur
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
