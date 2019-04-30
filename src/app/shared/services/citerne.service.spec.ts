import { TestBed } from '@angular/core/testing';

import { CiterneService } from './citerne.service';

describe('CiterneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CiterneService = TestBed.get(CiterneService);
    expect(service).toBeTruthy();
  });
});
