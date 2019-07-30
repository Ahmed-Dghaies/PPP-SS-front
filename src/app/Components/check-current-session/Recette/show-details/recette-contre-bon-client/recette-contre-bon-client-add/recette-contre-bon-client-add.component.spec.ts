import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteContreBonClientAddComponent } from './recette-contre-bon-client-add.component';

describe('RecetteContreBonClientAddComponent', () => {
  let component: RecetteContreBonClientAddComponent;
  let fixture: ComponentFixture<RecetteContreBonClientAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteContreBonClientAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteContreBonClientAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
