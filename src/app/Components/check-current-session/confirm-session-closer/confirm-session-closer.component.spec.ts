import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmSessionCloserComponent } from './confirm-session-closer.component';

describe('ConfirmSessionCloserComponent', () => {
  let component: ConfirmSessionCloserComponent;
  let fixture: ComponentFixture<ConfirmSessionCloserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmSessionCloserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmSessionCloserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
