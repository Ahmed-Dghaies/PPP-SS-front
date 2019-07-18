import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteCarteBonAddComponent } from './recette-carte-bon-add.component';

describe('RecetteCarteBonAddComponent', () => {
  let component: RecetteCarteBonAddComponent;
  let fixture: ComponentFixture<RecetteCarteBonAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteCarteBonAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteCarteBonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
