import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StegEtAutresListComponent } from './steg-et-autres-list.component';

describe('StegEtAutresListComponent', () => {
  let component: StegEtAutresListComponent;
  let fixture: ComponentFixture<StegEtAutresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StegEtAutresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StegEtAutresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
