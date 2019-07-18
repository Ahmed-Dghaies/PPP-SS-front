import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteCreditsAddComponent } from './recette-credits-add.component';

describe('RecetteCreditsAddComponent', () => {
  let component: RecetteCreditsAddComponent;
  let fixture: ComponentFixture<RecetteCreditsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteCreditsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteCreditsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
