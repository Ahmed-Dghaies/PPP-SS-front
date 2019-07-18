import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteCreditsEditComponent } from './recette-credits-edit.component';

describe('RecetteCreditsEditComponent', () => {
  let component: RecetteCreditsEditComponent;
  let fixture: ComponentFixture<RecetteCreditsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteCreditsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteCreditsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
