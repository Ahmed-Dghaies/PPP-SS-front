import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteBonValeurEditComponent } from './recette-bon-valeur-edit.component';

describe('RecetteBonValeurEditComponent', () => {
  let component: RecetteBonValeurEditComponent;
  let fixture: ComponentFixture<RecetteBonValeurEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteBonValeurEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteBonValeurEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
