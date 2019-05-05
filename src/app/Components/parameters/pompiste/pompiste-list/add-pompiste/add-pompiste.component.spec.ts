import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPompisteComponent } from './add-pompiste.component';

describe('AddPompisteComponent', () => {
  let component: AddPompisteComponent;
  let fixture: ComponentFixture<AddPompisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPompisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPompisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
