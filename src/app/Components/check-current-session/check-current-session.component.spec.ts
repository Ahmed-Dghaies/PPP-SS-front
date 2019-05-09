import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCurrentSessionComponent } from './check-current-session.component';

describe('CheckCurrentSessionComponent', () => {
  let component: CheckCurrentSessionComponent;
  let fixture: ComponentFixture<CheckCurrentSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckCurrentSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckCurrentSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
