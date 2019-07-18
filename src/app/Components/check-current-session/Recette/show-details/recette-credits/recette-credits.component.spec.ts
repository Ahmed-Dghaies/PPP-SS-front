import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteCreditsComponent } from './recette-credits.component';

describe('RecetteCreditsComponent', () => {
  let component: RecetteCreditsComponent;
  let fixture: ComponentFixture<RecetteCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteCreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
