import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePompisteComponent } from './update-pompiste.component';

describe('UpdatePompisteComponent', () => {
  let component: UpdatePompisteComponent;
  let fixture: ComponentFixture<UpdatePompisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePompisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePompisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
