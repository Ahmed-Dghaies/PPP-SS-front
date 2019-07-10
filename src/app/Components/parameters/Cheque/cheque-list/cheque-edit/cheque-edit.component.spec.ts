import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeEditComponent } from './cheque-edit.component';

describe('ChequeEditComponent', () => {
  let component: ChequeEditComponent;
  let fixture: ComponentFixture<ChequeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
