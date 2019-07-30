import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContreBonListComponent } from './contre-bon-list.component';

describe('ContreBonListComponent', () => {
  let component: ContreBonListComponent;
  let fixture: ComponentFixture<ContreBonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContreBonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContreBonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
