import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAddComponent } from './index-add.component';

describe('IndexAddComponent', () => {
  let component: IndexAddComponent;
  let fixture: ComponentFixture<IndexAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
