import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBonEditComponent } from './card-bon-edit.component';

describe('CardBonEditComponent', () => {
  let component: CardBonEditComponent;
  let fixture: ComponentFixture<CardBonEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBonEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
