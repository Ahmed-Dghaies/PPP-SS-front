import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubventionPecheMoreDetailsComponent } from './subvention-peche-more-details.component';

describe('SubventionPecheMoreDetailsComponent', () => {
  let component: SubventionPecheMoreDetailsComponent;
  let fixture: ComponentFixture<SubventionPecheMoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubventionPecheMoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubventionPecheMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
