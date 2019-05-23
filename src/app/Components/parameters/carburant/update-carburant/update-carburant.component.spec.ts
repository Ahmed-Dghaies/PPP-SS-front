import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarburantComponent } from './update-carburant.component';

describe('UpdateCarburantComponent', () => {
  let component: UpdateCarburantComponent;
  let fixture: ComponentFixture<UpdateCarburantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCarburantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCarburantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
