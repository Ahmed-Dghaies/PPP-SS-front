import { TestBed } from '@angular/core/testing';

import { CarteBonService } from './carte-bon.service';

describe('CarteBonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarteBonService = TestBed.get(CarteBonService);
    expect(service).toBeTruthy();
  });
});
