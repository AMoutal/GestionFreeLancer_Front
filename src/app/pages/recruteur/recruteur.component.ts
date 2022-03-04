import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { JobOwner } from 'src/app/models/job-owner';
import { JobOwnerService } from 'src/app/services/job-owner.service';

@Component({
  selector: 'app-recruteur',
  templateUrl: './recruteur.component.html',
  styleUrls: ['./recruteur.component.css']
})
export class RecruteurComponent implements OnInit {

  jobowners:any;
  jobowner:JobOwner=new JobOwner();
  constructor(private appService:AppService,private router:Router, private jobownerService:JobOwnerService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.jobownerService.findAll().subscribe(data => {this.jobowners = data;});
  }

  deleteJobOwner(id:number){
    this.jobownerService.delete(id).subscribe(()=>{this.findAll()});
  }

  editJobOwner(j:JobOwner): void{
    localStorage.removeItem("userId");
    localStorage.setItem("userId", j.idUser.toString());
    console.log(j.idUser);
    this.router.navigate(['/recruteurs/edit-recruteur']);
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
