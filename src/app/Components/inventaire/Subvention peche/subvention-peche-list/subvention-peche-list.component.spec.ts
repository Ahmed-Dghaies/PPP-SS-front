import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubventionPecheListComponent } from './subvention-peche-list.component';

describe('SubventionPecheListComponent', () => {
  let component: SubventionPecheListComponent;
  let fixture: ComponentFixture<SubventionPecheListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubventionPecheListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubventionPecheListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
