import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBonMoreDetailsComponent } from './card-bon-more-details.component';

describe('CardBonMoreDetailsComponent', () => {
  let component: CardBonMoreDetailsComponent;
  let fixture: ComponentFixture<CardBonMoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBonMoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBonMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
