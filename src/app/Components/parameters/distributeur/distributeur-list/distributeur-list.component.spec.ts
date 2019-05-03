import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributeurListComponent } from './distributeur-list.component';

describe('DistributeurListComponent', () => {
  let component: DistributeurListComponent;
  let fixture: ComponentFixture<DistributeurListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributeurListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributeurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
