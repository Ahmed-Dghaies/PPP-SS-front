import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteEspeceComponent } from './recette-espece.component';

describe('RecetteEspeceComponent', () => {
  let component: RecetteEspeceComponent;
  let fixture: ComponentFixture<RecetteEspeceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteEspeceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteEspeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
