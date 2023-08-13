import { TestBed } from '@angular/core/testing';

import { LeaveListService } from './leave-list.service';

describe('LeaveListService', () => {
  let service: LeaveListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
