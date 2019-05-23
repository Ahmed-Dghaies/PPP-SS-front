import { TestBed } from '@angular/core/testing';

import { CarburantService } from './carburant.service';

describe('CarburantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarburantService = TestBed.get(CarburantService);
    expect(service).toBeTruthy();
  });
});
