import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteSubventionPecheEditComponent } from './recette-subvention-peche-edit.component';

describe('RecetteSubventionPecheEditComponent', () => {
  let component: RecetteSubventionPecheEditComponent;
  let fixture: ComponentFixture<RecetteSubventionPecheEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteSubventionPecheEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteSubventionPecheEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
