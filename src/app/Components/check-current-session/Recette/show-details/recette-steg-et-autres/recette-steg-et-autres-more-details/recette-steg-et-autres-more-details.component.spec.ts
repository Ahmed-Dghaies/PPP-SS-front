import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteStegEtAutresMoreDetailsComponent } from './recette-steg-et-autres-more-details.component';

describe('RecetteStegEtAutresMoreDetailsComponent', () => {
  let component: RecetteStegEtAutresMoreDetailsComponent;
  let fixture: ComponentFixture<RecetteStegEtAutresMoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteStegEtAutresMoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteStegEtAutresMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
