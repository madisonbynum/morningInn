import { TestBed } from '@angular/core/testing';

import { CreateGuestService } from './create-guest.service';

describe('CreateGuestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateGuestService = TestBed.get(CreateGuestService);
    expect(service).toBeTruthy();
  });
});
