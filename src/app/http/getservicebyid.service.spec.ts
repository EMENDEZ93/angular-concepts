import { TestBed } from '@angular/core/testing';

import { GetservicebyidService } from './getservicebyid.service';

describe('GetservicebyidService', () => {
  let service: GetservicebyidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetservicebyidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
