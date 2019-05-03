import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrixCarburantAddComponent } from './prix-carburant-add.component';

describe('PrixCarburantAddComponent', () => {
  let component: PrixCarburantAddComponent;
  let fixture: ComponentFixture<PrixCarburantAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrixCarburantAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrixCarburantAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
