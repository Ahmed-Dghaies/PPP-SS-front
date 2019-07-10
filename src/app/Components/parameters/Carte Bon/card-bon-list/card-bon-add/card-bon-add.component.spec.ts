import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBonAddComponent } from './card-bon-add.component';

describe('CardBonAddComponent', () => {
  let component: CardBonAddComponent;
  let fixture: ComponentFixture<CardBonAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBonAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
