import { TestBed } from '@angular/core/testing';

import { TextLogsService } from './text-logs.service';

describe('TestLogsService', () => {
  let service: TextLogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextLogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
