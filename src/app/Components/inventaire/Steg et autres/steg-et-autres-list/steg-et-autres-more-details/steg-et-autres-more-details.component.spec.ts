import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StegEtAutresMoreDetailsComponent } from './steg-et-autres-more-details.component';

describe('StegEtAutresMoreDetailsComponent', () => {
  let component: StegEtAutresMoreDetailsComponent;
  let fixture: ComponentFixture<StegEtAutresMoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StegEtAutresMoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StegEtAutresMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
