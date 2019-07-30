import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContreBonCaisseEditComponent } from './contre-bon-caisse-edit.component';

describe('ContreBonCaisseEditComponent', () => {
  let component: ContreBonCaisseEditComponent;
  let fixture: ComponentFixture<ContreBonCaisseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContreBonCaisseEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContreBonCaisseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
