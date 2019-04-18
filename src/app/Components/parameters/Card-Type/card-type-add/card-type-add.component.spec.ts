import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTypeAddComponent } from './card-type-add.component';

describe('CardTypeAddComponent', () => {
  let component: CardTypeAddComponent;
  let fixture: ComponentFixture<CardTypeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTypeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
