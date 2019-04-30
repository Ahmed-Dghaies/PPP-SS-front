import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiterneListComponent } from './citerne-list.component';

describe('CiterneListComponent', () => {
  let component: CiterneListComponent;
  let fixture: ComponentFixture<CiterneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiterneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiterneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
