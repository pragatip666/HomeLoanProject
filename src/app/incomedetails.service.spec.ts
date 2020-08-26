import { TestBed } from '@angular/core/testing';

import { IncomedetailsService } from './incomedetails.service';

describe('IncomedetailsService', () => {
  let service: IncomedetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomedetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
