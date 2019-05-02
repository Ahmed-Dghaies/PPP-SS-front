import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleveIndexListComponent } from './releveIndex-list.component';

describe('IndexListComponent', () => {
  let component: ReleveIndexListComponent;
  let fixture: ComponentFixture<ReleveIndexListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleveIndexListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleveIndexListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
