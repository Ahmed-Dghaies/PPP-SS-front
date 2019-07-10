import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonValeurAddComponent } from './bon-valeur-add.component';

describe('BonValeurAddComponent', () => {
  let component: BonValeurAddComponent;
  let fixture: ComponentFixture<BonValeurAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonValeurAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonValeurAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
