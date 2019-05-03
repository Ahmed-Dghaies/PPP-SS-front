import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributeurEditComponent } from './distributeur-edit.component';

describe('DistributeurEditComponent', () => {
  let component: DistributeurEditComponent;
  let fixture: ComponentFixture<DistributeurEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributeurEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributeurEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
