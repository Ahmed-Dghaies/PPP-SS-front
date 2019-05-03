import { TestBed } from '@angular/core/testing';

import { PrixCarburantService } from './prix-carburant.service';

describe('PrixCarburantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrixCarburantService = TestBed.get(PrixCarburantService);
    expect(service).toBeTruthy();
  });
});
