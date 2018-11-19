import { TestBed } from '@angular/core/testing';

import { StepCounterService } from './step-counter.service';

describe('StepCounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StepCounterService = TestBed.get(StepCounterService);
    expect(service).toBeTruthy();
  });
});
