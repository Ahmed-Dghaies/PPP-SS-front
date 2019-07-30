import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteContreBonCaisseAddComponent } from './recette-contre-bon-caisse-add.component';

describe('RecetteContreBonCaisseAddComponent', () => {
  let component: RecetteContreBonCaisseAddComponent;
  let fixture: ComponentFixture<RecetteContreBonCaisseAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteContreBonCaisseAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteContreBonCaisseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
