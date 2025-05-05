import { TestBed } from '@angular/core/testing';

import { ScreenshotLogsService } from './screenshot-logs.service';

describe('ScreenshotLogsService', () => {
  let service: ScreenshotLogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenshotLogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
