import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteSubventionPecheComponent } from './recette-subvention-peche.component';

describe('RecetteSubventionPecheComponent', () => {
  let component: RecetteSubventionPecheComponent;
  let fixture: ComponentFixture<RecetteSubventionPecheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteSubventionPecheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteSubventionPecheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
