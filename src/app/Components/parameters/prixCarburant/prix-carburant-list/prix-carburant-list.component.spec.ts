import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrixCarburantListComponent } from './prix-carburant-list.component';

describe('PrixCarburantListComponent', () => {
  let component: PrixCarburantListComponent;
  let fixture: ComponentFixture<PrixCarburantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrixCarburantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrixCarburantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
