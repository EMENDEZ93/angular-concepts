import { TestBed } from '@angular/core/testing';

import { RetryserviceService } from './retryservice.service';

describe('RetryserviceService', () => {
  let service: RetryserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetryserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
