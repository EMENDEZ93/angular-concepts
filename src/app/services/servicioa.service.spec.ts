import { TestBed } from '@angular/core/testing';

import { ServicioaService } from './servicioa.service';

describe('ServicioaService', () => {
  let service: ServicioaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
