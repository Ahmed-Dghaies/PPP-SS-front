import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTypeGetComponent } from './card-type-get.component';

describe('CardTypeGetComponent', () => {
  let component: CardTypeGetComponent;
  let fixture: ComponentFixture<CardTypeGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTypeGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTypeGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
