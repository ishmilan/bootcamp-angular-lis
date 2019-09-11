/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OwnerService } from './owner.service';

describe('OwnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OwnerService]
    });
  });

  it('should ...', inject([OwnerService], (service: OwnerService) => {
    expect(service).toBeTruthy();
  }));
});
