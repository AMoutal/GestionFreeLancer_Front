import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Freelancer } from 'src/app/models/freelancer';
import { FreelancerService } from 'src/app/services/freelancer.service';

@Component({
  selector: 'app-freelancers',
  templateUrl: './freelancers.component.html',
  styleUrls: ['./freelancers.component.css']
})
export class FreelancersComponent implements OnInit {

  freelancers:any;
  freelancer:Freelancer = new Freelancer();
  constructor(private appService:AppService,private router:Router, private freelancerService:FreelancerService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.freelancerService.findAll().subscribe(data => {this.freelancers = data;});
  }

  deleteFreelancer(id:number){
    this.freelancerService.delete(id).subscribe(()=>{this.findAll()});
  }

  editFreelancer(f:Freelancer){
    localStorage.removeItem("userId");
    localStorage.setItem("userId", f.idUser.toString());
    console.log(f.idUser);
    this.router.navigate(['/freelancers/edit-freelancer']);
  }

}
