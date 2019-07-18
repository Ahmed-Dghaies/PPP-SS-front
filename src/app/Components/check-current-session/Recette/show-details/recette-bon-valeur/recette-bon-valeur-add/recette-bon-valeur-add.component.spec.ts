import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteBonValeurAddComponent } from './recette-bon-valeur-add.component';

describe('RecetteBonValeurAddComponent', () => {
  let component: RecetteBonValeurAddComponent;
  let fixture: ComponentFixture<RecetteBonValeurAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteBonValeurAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteBonValeurAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
