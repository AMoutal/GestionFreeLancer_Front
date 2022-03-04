import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from 'src/app/models/entreprise';
import { JobOwner } from 'src/app/models/job-owner';
import { Role } from 'src/app/models/role';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { JobOwnerService } from 'src/app/services/job-owner.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
    selector: 'app-register-job-owner',
    templateUrl: './register-job-owner.component.html',
    styleUrls: ['./register-job-owner.component.css']
})
export class RegisterJobOwnerComponent implements OnInit
{
    jobOwner: JobOwner = new JobOwner();
    roles: Role[];
    entreprises: Entreprise[];
    constructor(private jobOwnerService: JobOwnerService, private roleService: RoleService, private entrepriseService: EntrepriseService, private router: Router) { }

    ngOnInit(): void
    {
        this.loadEntreprises();
    }

    public saveJobOwner()
    {
        // save : userService.save(utilisateur)
        // maj liste : subscribe avec findAll
        // vider formulaire : new Utilisateur

        this.roleService.findAll().subscribe(data => 
        {
            this.roles = data;
            for (let r of this.roles)
            {
                if (r.libelle == 'jobOwner')
                {
                    this.jobOwner.roles = [r];
                }
            }
            this.jobOwnerService.save(this.jobOwner).subscribe(() => { this.jobOwner = new JobOwner(); this.router.navigate(['/loginj']) });
        })

        // rafraichit la liste des utilisateurs

    }

    public loadEntreprises()
    {
        this.entrepriseService.findAll().subscribe(data => { this.entreprises = data; });
    }
}
