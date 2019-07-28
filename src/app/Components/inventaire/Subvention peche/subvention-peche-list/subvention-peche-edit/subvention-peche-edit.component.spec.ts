import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubventionPecheEditComponent } from './subvention-peche-edit.component';

describe('SubventionPecheEditComponent', () => {
  let component: SubventionPecheEditComponent;
  let fixture: ComponentFixture<SubventionPecheEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubventionPecheEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubventionPecheEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
