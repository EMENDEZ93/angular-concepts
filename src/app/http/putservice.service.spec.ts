import { TestBed } from '@angular/core/testing';

import { PutserviceService } from './putservice.service';

describe('PutserviceService', () => {
  let service: PutserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
