import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Test } from 'src/app/models/test';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-edit-test',
  templateUrl: './edit-test.component.html',
  styleUrls: ['./edit-test.component.css']
})
export class EditTestComponent implements OnInit {

  editTest: FormGroup;
  test: Test = new Test();
  constructor(private router:Router, private testService:TestService, private formBuilder:FormBuilder) {

   }

  ngOnInit(): void {
    let id_test = localStorage.getItem("id_test");
    if (id_test == null) {
      alert("action invalide");
      this.router.navigate(["tests"]);
      return;
    }
    this.editTest = this.formBuilder.group(
      {
        idTest: [],
        type: ['', Validators.required],
        niveau: ['', Validators.required],        
      }
    );
    this.testService.findOne(+id_test).subscribe(data => {this.editTest.patchValue(data); });
  }

  updateTest(){
    let varJSON = JSON.stringify(this.editTest.value);
    this.testService.update(varJSON).subscribe(()=>{this.router.navigate(["tests"]); });
  }

}
