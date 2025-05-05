import { Component, inject, OnInit, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ScreenshotLogs } from '../models/screenshot-logs.model';
import { ScreenshotLogsService } from './screenshot-logs.service';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-screenshot-logs',
  imports: [
    TableModule, 
    ProgressSpinnerModule, 
    DialogModule, 
    DatePipe,
    ImageModule
  ],
  templateUrl: './screenshot-logs.component.html',
  styleUrl: './screenshot-logs.component.css'
})

export class ScreenshotLogsComponent implements OnInit {
  screenshotLogsData: ScreenshotLogs[] = [];
  currentFile!: ScreenshotLogs;
  isFetching = signal(false);
  dialogVisible = signal(false);
  private screenshotLogsService = inject(ScreenshotLogsService);

  ngOnInit() {
    this.isFetching.set(true);
    this.screenshotLogsService.pollGetAllScreenshots().subscribe({
      next: (data) => {
        this.screenshotLogsData = data
        this.isFetching.set(false);
      },
      error: (err) => console.error(err),
    });
  }

  onShowDialog(currentFile: ScreenshotLogs) {
    this.currentFile = currentFile;
    this.dialogVisible.set(true);
  }
}
