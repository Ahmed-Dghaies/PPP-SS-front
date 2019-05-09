import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleveIndexEditComponent } from './releveIndex-edit.component';

describe('IndexEditComponent', () => {
  let component: ReleveIndexEditComponent;
  let fixture: ComponentFixture<ReleveIndexEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleveIndexEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleveIndexEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
