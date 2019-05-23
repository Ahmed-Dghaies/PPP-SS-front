import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarburantComponent } from './add-carburant.component';

describe('AddCarburantComponent', () => {
  let component: AddCarburantComponent;
  let fixture: ComponentFixture<AddCarburantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarburantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarburantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
