import { TestBed } from '@angular/core/testing';

import { ParamsurlserviceService } from './paramsurlservice.service';

describe('ParamsurlserviceService', () => {
  let service: ParamsurlserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParamsurlserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
