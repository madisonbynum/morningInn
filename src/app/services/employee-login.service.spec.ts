import { TestBed } from '@angular/core/testing';

import { EmployeeLoginService } from './employee-login.service';

describe('EmployeeLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeLoginService = TestBed.get(EmployeeLoginService);
    expect(service).toBeTruthy();
  });
});
