import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionPompisteListComponent } from './session-pompiste-list.component';

describe('SessionPompisteListComponent', () => {
  let component: SessionPompisteListComponent;
  let fixture: ComponentFixture<SessionPompisteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionPompisteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionPompisteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
