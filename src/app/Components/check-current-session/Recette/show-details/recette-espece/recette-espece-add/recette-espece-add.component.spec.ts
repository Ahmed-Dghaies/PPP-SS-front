import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteEspeceAddComponent } from './recette-espece-add.component';

describe('RecetteEspeceAddComponent', () => {
  let component: RecetteEspeceAddComponent;
  let fixture: ComponentFixture<RecetteEspeceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteEspeceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteEspeceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
