import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributeurAddComponent } from './distributeur-add.component';

describe('DistributeurAddComponent', () => {
  let component: DistributeurAddComponent;
  let fixture: ComponentFixture<DistributeurAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributeurAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributeurAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
