import { TestBed } from '@angular/core/testing';

import { CotohaAuthService } from './cotoha-auth.service';

describe('CotohaAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CotohaAuthService = TestBed.get(CotohaAuthService);
    expect(service).toBeTruthy();
  });
});
