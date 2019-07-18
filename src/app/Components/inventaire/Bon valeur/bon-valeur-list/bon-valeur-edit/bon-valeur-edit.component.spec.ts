import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonValeurEditComponent } from './bon-valeur-edit.component';

describe('BonValeurEditComponent', () => {
  let component: BonValeurEditComponent;
  let fixture: ComponentFixture<BonValeurEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonValeurEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonValeurEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
