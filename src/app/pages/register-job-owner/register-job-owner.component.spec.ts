import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterJobOwnerComponent } from './register-job-owner.component';

describe('RegisterJobOwnerComponent', () => {
  let component: RegisterJobOwnerComponent;
  let fixture: ComponentFixture<RegisterJobOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterJobOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterJobOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
