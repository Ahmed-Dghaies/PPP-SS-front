import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteStegEtAutresAddComponent } from './recette-steg-et-autres-add.component';

describe('RecetteStegEtAutresAddComponent', () => {
  let component: RecetteStegEtAutresAddComponent;
  let fixture: ComponentFixture<RecetteStegEtAutresAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteStegEtAutresAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteStegEtAutresAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
