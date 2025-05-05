import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Observable, Subscription } from 'rxjs';
import { TextLogsService } from './text-logs.service';

@Component({
  selector: 'app-text-logs',
  imports: [ButtonModule, TextareaModule, FormsModule, PanelModule, DividerModule, ProgressSpinnerModule],
  templateUrl: './text-logs.component.html',
  styleUrl: './text-logs.component.css'
})
export class TextLogsComponent {
  textLogsData = [];
  textlogsService = inject(TextLogsService);
  value = "some data";
  isFetching = signal(false);
  ngOnInit() {
    this.isFetching.set(true);
    this.textlogsService.pollTextLogs().subscribe({
      next: (data) => {
        this.value = data.text_logs;
        this.isFetching.set(false);
      }
    });
  }
}
