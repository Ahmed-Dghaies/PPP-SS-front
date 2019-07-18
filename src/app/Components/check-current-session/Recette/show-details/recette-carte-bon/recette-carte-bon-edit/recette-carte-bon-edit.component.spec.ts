import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteCarteBonEditComponent } from './recette-carte-bon-edit.component';

describe('RecetteCarteBonEditComponent', () => {
  let component: RecetteCarteBonEditComponent;
  let fixture: ComponentFixture<RecetteCarteBonEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteCarteBonEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteCarteBonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
