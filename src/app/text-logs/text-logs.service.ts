import { inject, Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';
import { switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextLogsService {
  private backendUrl = environment.apiUrl;
  private endpoint = "text-logs/";
  private httpClient = inject(HttpClient);

  constructor() { }

  getTextLogs() {
    return this.httpClient.get<{text_logs: string}>(this.backendUrl + this.endpoint);
  }

  pollTextLogs() {
    return timer(0, 5000)
    .pipe(
      switchMap(_ => this.getTextLogs())
    );
  }
}
