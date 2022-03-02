import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginJobOwnerComponent } from './login-job-owner.component';

describe('LoginJobOwnerComponent', () => {
  let component: LoginJobOwnerComponent;
  let fixture: ComponentFixture<LoginJobOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginJobOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginJobOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
