import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteSubventionPecheMoreDetailsComponent } from './recette-subvention-peche-more-details.component';

describe('RecetteSubventionPecheMoreDetailsComponent', () => {
  let component: RecetteSubventionPecheMoreDetailsComponent;
  let fixture: ComponentFixture<RecetteSubventionPecheMoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteSubventionPecheMoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteSubventionPecheMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
