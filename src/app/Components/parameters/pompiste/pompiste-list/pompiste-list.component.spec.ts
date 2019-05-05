import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PompisteListComponent } from './pompiste-list.component';

describe('PompisteListComponent', () => {
  let component: PompisteListComponent;
  let fixture: ComponentFixture<PompisteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PompisteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PompisteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
