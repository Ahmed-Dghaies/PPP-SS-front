import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrixCarburantEditComponent } from './prix-carburant-edit.component';

describe('PrixCarburantEditComponent', () => {
  let component: PrixCarburantEditComponent;
  let fixture: ComponentFixture<PrixCarburantEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrixCarburantEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrixCarburantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
