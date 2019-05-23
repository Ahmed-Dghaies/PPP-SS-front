import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreCiterneDetailsComponent } from './more-citerne-details.component';

describe('MoreCiterneDetailsComponent', () => {
  let component: MoreCiterneDetailsComponent;
  let fixture: ComponentFixture<MoreCiterneDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreCiterneDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreCiterneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
