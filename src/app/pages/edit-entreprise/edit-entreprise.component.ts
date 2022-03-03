import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Entreprise } from 'src/app/models/entreprise';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
    selector: 'app-edit-entreprise',
    templateUrl: './edit-entreprise.component.html',
    styleUrls: ['./edit-entreprise.component.css']
})
export class EditEntrepriseComponent implements OnInit
{

    editEntreprise: FormGroup;
    entreprise: Entreprise = new Entreprise();
    constructor(private router: Router, private entrepriseService: EntrepriseService, private formBuilder: FormBuilder) { }

    ngOnInit(): void
    {
        let entrepriseId = localStorage.getItem("entrepriseId");
        if (entrepriseId == null)
        {
            alert("Action invalide");
            this.router.navigate(["entreprises"]);
            return;
        }
        this.editEntreprise = this.formBuilder.group(
            {
                idEntreprise: [],
                nom: ['', Validators.required],
                adresse: this.formBuilder.group(
                    {
                        adresse: ['', Validators.required],
                        ville: ['', Validators.required],
                        cp: ['', Validators.required],
                        pays: ['', Validators.required],
                    }),
                email: ['', Validators.required]    
            });
        this.entrepriseService.findOne(+entrepriseId).subscribe(data => { this.editEntreprise.patchValue(data); })
    }

    updateEntreprise()
    {
        let varJSON = JSON.stringify(this.editEntreprise.value);
        this.entrepriseService.update(varJSON).subscribe(() => { this.router.navigate(["entreprises"]); });
    }

    cancel()
    {
        this.router.navigate(["entreprises"]);
    }
}
