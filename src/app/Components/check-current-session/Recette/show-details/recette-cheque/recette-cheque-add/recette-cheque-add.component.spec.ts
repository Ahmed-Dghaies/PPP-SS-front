import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteChequeAddComponent } from './recette-cheque-add.component';

describe('RecetteChequeAddComponent', () => {
  let component: RecetteChequeAddComponent;
  let fixture: ComponentFixture<RecetteChequeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteChequeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteChequeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
