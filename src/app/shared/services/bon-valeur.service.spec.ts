import { TestBed } from '@angular/core/testing';

import { BonValeurService } from './bon-valeur.service';

describe('BonValeurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BonValeurService = TestBed.get(BonValeurService);
    expect(service).toBeTruthy();
  });
});
