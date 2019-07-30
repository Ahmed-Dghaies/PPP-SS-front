import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteContreBonCaisseComponent } from './recette-contre-bon-caisse.component';

describe('RecetteContreBonCaisseComponent', () => {
  let component: RecetteContreBonCaisseComponent;
  let fixture: ComponentFixture<RecetteContreBonCaisseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteContreBonCaisseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteContreBonCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
