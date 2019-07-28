import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteSubventionPecheAddComponent } from './recette-subvention-peche-add.component';

describe('RecetteSubventionPecheAddComponent', () => {
  let component: RecetteSubventionPecheAddComponent;
  let fixture: ComponentFixture<RecetteSubventionPecheAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteSubventionPecheAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteSubventionPecheAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
