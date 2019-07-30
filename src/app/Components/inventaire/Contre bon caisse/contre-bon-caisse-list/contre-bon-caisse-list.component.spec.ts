import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContreBonCaisseListComponent } from './contre-bon-caisse-list.component';

describe('ContreBonCaisseListComponent', () => {
  let component: ContreBonCaisseListComponent;
  let fixture: ComponentFixture<ContreBonCaisseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContreBonCaisseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContreBonCaisseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
