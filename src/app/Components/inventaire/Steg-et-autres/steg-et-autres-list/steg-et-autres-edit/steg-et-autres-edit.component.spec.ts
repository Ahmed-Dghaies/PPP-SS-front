import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StegEtAutresEditComponent } from './steg-et-autres-edit.component';

describe('StegEtAutresEditComponent', () => {
  let component: StegEtAutresEditComponent;
  let fixture: ComponentFixture<StegEtAutresEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StegEtAutresEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StegEtAutresEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
