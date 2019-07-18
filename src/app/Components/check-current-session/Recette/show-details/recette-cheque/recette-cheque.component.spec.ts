import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteChequeComponent } from './recette-cheque.component';

describe('RecetteChequeComponent', () => {
  let component: RecetteChequeComponent;
  let fixture: ComponentFixture<RecetteChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
