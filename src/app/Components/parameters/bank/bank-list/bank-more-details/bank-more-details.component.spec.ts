import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankMoreDetailsComponent } from './bank-more-details.component';

describe('BankMoreDetailsComponent', () => {
  let component: BankMoreDetailsComponent;
  let fixture: ComponentFixture<BankMoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankMoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
