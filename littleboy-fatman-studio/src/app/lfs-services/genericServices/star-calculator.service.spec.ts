import { TestBed } from '@angular/core/testing';

import { StarCalculatorService } from './star-calculator.service';

describe('StarCalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarCalculatorService = TestBed.get(StarCalculatorService);
    expect(service).toBeTruthy();
  });
});
