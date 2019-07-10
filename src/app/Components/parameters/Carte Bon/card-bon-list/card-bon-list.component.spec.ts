import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBonListComponent } from './card-bon-list.component';

describe('CardBonListComponent', () => {
  let component: CardBonListComponent;
  let fixture: ComponentFixture<CardBonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
