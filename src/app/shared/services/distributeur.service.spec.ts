import { TestBed } from '@angular/core/testing';

import { DistributeurService } from './distributeur.service';

describe('DistributeurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DistributeurService = TestBed.get(DistributeurService);
    expect(service).toBeTruthy();
  });
});
