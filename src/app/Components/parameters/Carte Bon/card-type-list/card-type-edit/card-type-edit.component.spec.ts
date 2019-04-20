import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTypeEditComponent } from './card-type-edit.component';

describe('CardTypeEditComponent', () => {
  let component: CardTypeEditComponent;
  let fixture: ComponentFixture<CardTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
