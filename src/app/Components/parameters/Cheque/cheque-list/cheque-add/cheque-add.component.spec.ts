import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeAddComponent } from './cheque-add.component';

describe('ChequeAddComponent', () => {
  let component: ChequeAddComponent;
  let fixture: ComponentFixture<ChequeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
