import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteCarteBonMoreDetailsComponent } from './recette-carte-bon-more-details.component';

describe('RecetteCarteBonMoreDetailsComponent', () => {
  let component: RecetteCarteBonMoreDetailsComponent;
  let fixture: ComponentFixture<RecetteCarteBonMoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteCarteBonMoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteCarteBonMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
