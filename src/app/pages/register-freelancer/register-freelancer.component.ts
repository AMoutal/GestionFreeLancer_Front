import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Freelancer } from 'src/app/models/freelancer';
import { Role } from 'src/app/models/role';
import { FreelancerService } from 'src/app/services/freelancer.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
    selector: 'app-register-freelancer',
    templateUrl: './register-freelancer.component.html',
    styleUrls: ['./register-freelancer.component.css']
})
export class RegisterFreelancerComponent implements OnInit
{
    freelancer: Freelancer = new Freelancer();
    roles: Role[];
    constructor(private freelancerService: FreelancerService, private roleService: RoleService, private router: Router) { }

    ngOnInit(): void
    {
    }

    public saveFreelancer()
    {
        // save : userService.save(utilisateur)
        // maj liste : subscribe avec findAll
        // vider formulaire : new Utilisateur

        this.roleService.findAll().subscribe(data => 
        {
            this.roles = data;
            for (let r of this.roles)
            {
                if (r.libelle == 'freelancer')
                {
                    this.freelancer.roles = [r];
                }
            }
            this.freelancerService.save(this.freelancer).subscribe(() => { this.freelancer = new Freelancer(); this.router.navigate(['/loginf']) });
        })
        
        // rafraichit la liste des utilisateurs

    }
}
