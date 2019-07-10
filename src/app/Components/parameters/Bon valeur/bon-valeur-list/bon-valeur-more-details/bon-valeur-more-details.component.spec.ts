import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonValeurMoreDetailsComponent } from './bon-valeur-more-details.component';

describe('BonValeurMoreDetailsComponent', () => {
  let component: BonValeurMoreDetailsComponent;
  let fixture: ComponentFixture<BonValeurMoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonValeurMoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonValeurMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
