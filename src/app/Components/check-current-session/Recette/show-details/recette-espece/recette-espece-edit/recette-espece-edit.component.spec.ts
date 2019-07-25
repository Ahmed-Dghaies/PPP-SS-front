import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteEspeceEditComponent } from './recette-espece-edit.component';

describe('RecetteEspeceEditComponent', () => {
  let component: RecetteEspeceEditComponent;
  let fixture: ComponentFixture<RecetteEspeceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteEspeceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteEspeceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
