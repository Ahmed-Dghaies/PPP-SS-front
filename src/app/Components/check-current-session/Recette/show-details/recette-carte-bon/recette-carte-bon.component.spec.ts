import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteCarteBonComponent } from './recette-carte-bon.component';

describe('RecetteCarteBonComponent', () => {
  let component: RecetteCarteBonComponent;
  let fixture: ComponentFixture<RecetteCarteBonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteCarteBonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteCarteBonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
