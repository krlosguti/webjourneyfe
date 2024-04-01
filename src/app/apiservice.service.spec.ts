/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiserviceService } from './apiservice.service';

describe('Service: Apiservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiserviceService]
    });
  });

  it('should ...', inject([ApiserviceService], (service: ApiserviceService) => {
    expect(service).toBeTruthy();
  }));
});
