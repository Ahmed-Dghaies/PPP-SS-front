import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteChequeMoreDetailsComponent } from './recette-cheque-more-details.component';

describe('RecetteChequeMoreDetailsComponent', () => {
  let component: RecetteChequeMoreDetailsComponent;
  let fixture: ComponentFixture<RecetteChequeMoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteChequeMoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteChequeMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
