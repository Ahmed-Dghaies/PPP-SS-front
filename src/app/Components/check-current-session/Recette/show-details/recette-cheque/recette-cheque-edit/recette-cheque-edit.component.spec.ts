import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteChequeEditComponent } from './recette-cheque-edit.component';

describe('RecetteChequeEditComponent', () => {
  let component: RecetteChequeEditComponent;
  let fixture: ComponentFixture<RecetteChequeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteChequeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteChequeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
