import { TestBed } from '@angular/core/testing';

import { ZeldaService } from './zelda.service';

describe('ZeldaService', () => {
  let service: ZeldaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZeldaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
