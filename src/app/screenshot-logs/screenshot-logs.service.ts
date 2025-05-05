import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environment';
import { ScreenshotLogs } from '../models/screenshot-logs.model';
import { switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenshotLogsService {
  private httpClient = inject(HttpClient);
  private backendUrl = environment.apiUrl;
  private endpoint = "screenshot-logs/";
  
  constructor() { }

  getAllScreenshots() {
    return this.httpClient.get<ScreenshotLogs[]>(this.backendUrl + this.endpoint);
  }

  pollGetAllScreenshots() {
    return timer(0, 10000)
    .pipe(
      switchMap((_) => this.getAllScreenshots())
    );
  }
}
