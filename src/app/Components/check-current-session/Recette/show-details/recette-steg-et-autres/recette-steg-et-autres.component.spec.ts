import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteStegEtAutresComponent } from './recette-steg-et-autres.component';

describe('RecetteStegEtAutresComponent', () => {
  let component: RecetteStegEtAutresComponent;
  let fixture: ComponentFixture<RecetteStegEtAutresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteStegEtAutresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteStegEtAutresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
