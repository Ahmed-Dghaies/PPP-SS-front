import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteBonValeurComponent } from './recette-bon-valeur.component';

describe('RecetteBonValeurComponent', () => {
  let component: RecetteBonValeurComponent;
  let fixture: ComponentFixture<RecetteBonValeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteBonValeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteBonValeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
