import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteContreBonClientEditComponent } from './recette-contre-bon-client-edit.component';

describe('RecetteContreBonClientEditComponent', () => {
  let component: RecetteContreBonClientEditComponent;
  let fixture: ComponentFixture<RecetteContreBonClientEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteContreBonClientEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteContreBonClientEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
