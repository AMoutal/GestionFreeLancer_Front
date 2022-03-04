import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Test } from 'src/app/models/test';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  tests: any;
  test: Test = new Test();

  constructor(private appService:AppService, private testService:TestService, private router:Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.testService.findAll().subscribe(data => {this.tests = data;}); 
  }

  deleteTest(id:number){
    this.testService.delete(id).subscribe(()=>{this.findAll()});
  }

  saveTest(){
    this.testService.save(this.test).subscribe(()=>{
      this.findAll();
      this.test = new Test();
    });
  }

  editTest(test:Test): void{
    localStorage.removeItem("id_test");
    localStorage.setItem("id_test", test.idTest.toString());
    this.router.navigate(['/editTests']);
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
