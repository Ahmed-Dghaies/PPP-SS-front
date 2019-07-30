import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContreBonAddComponent } from './contre-bon-add.component';

describe('ContreBonAddComponent', () => {
  let component: ContreBonAddComponent;
  let fixture: ComponentFixture<ContreBonAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContreBonAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContreBonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
