import { Component, OnInit } from '@angular/core';
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

  constructor(private testService:TestService) { }

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

}
