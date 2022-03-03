import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Freelancer } from 'src/app/models/freelancer';
import { FreelancerService } from 'src/app/services/freelancer.service';

@Component({
  selector: 'app-edit-freelancer',
  templateUrl: './edit-freelancer.component.html',
  styleUrls: ['./edit-freelancer.component.css']
})
export class EditFreelancerComponent implements OnInit {

  
  editForm: FormGroup;
  freelancer:Freelancer=new Freelancer();
  constructor(private router:Router,private formBuilder:FormBuilder, private freelancerService:FreelancerService) { }

  ngOnInit(): void {
    let userId=localStorage.getItem("userId");
    console.log(userId)
    if(!userId){
      alert("Invalid Action !!");
      this.router.navigate(['/freelancers']);
      return;
  }
  this.editForm=this.formBuilder.group({
    idUser:[],
    nomUser:[''],
    prenomUser:[''],
    emailUser:[''],
    metier:[''],
    disponible:[],
    cv:[],
    password:['']
  })
  this.freelancerService.findOne(+userId).subscribe(data=>{this.editForm.patchValue(data)})
}

updateFreelancer(){
  var varJson=JSON.stringify(this.editForm.value);
  this.freelancerService.update(varJson).subscribe(() => {this.router.navigate(['/freelancers'])});
}

cancel()
{
    this.router.navigate(["/freelancers"]);
}

}
