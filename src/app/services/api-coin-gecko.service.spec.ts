import { TestBed } from '@angular/core/testing';

import { ApiCoinGeckoService } from './api-coin-gecko.service';

describe('ApiCoinGeckoService', () => {
  let service: ApiCoinGeckoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCoinGeckoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
