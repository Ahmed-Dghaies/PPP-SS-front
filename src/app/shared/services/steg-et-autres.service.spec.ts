import { TestBed } from '@angular/core/testing';

import { StegEtAutresService } from './steg-et-autres.service';

describe('StegEtAutresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StegEtAutresService = TestBed.get(StegEtAutresService);
    expect(service).toBeTruthy();
  });
});
