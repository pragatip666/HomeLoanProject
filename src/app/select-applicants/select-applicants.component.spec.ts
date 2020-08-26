import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectApplicantsComponent } from './select-applicants.component';

describe('SelectApplicantsComponent', () => {
  let component: SelectApplicantsComponent;
  let fixture: ComponentFixture<SelectApplicantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectApplicantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
