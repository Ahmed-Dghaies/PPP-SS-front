import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteStegEtAutresEditComponent } from './recette-steg-et-autres-edit.component';

describe('RecetteStegEtAutresEditComponent', () => {
  let component: RecetteStegEtAutresEditComponent;
  let fixture: ComponentFixture<RecetteStegEtAutresEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteStegEtAutresEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteStegEtAutresEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
