import { TestBed, inject } from '@angular/core/testing';

import { ProducttypeserviceService } from './producttypeservice.service';

describe('ProducttypeserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProducttypeserviceService]
    });
  });

  it('should be created', inject([ProducttypeserviceService], (service: ProducttypeserviceService) => {
    expect(service).toBeTruthy();
  }));
});
