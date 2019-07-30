import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteContreBonClientComponent } from './recette-contre-bon-client.component';

describe('RecetteContreBonClientComponent', () => {
  let component: RecetteContreBonClientComponent;
  let fixture: ComponentFixture<RecetteContreBonClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteContreBonClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteContreBonClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
