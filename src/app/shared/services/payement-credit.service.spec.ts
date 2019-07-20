import { TestBed } from '@angular/core/testing';

import { PayementCreditService } from './payement-credit.service';

describe('PayementCreditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PayementCreditService = TestBed.get(PayementCreditService);
    expect(service).toBeTruthy();
  });
});
