import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContreBonMoreDetailsComponent } from './contre-bon-more-details.component';

describe('ContreBonMoreDetailsComponent', () => {
  let component: ContreBonMoreDetailsComponent;
  let fixture: ComponentFixture<ContreBonMoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContreBonMoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContreBonMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
