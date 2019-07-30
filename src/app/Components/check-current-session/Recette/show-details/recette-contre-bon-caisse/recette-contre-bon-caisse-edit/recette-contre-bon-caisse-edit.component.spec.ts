import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteContreBonCaisseEditComponent } from './recette-contre-bon-caisse-edit.component';

describe('RecetteContreBonCaisseEditComponent', () => {
  let component: RecetteContreBonCaisseEditComponent;
  let fixture: ComponentFixture<RecetteContreBonCaisseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteContreBonCaisseEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteContreBonCaisseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
