import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonValeurListComponent } from './bon-valeur-list.component';

describe('BonValeurListComponent', () => {
  let component: BonValeurListComponent;
  let fixture: ComponentFixture<BonValeurListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonValeurListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonValeurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
