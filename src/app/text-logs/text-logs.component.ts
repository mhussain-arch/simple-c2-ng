import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-text-logs',
  imports: [ButtonModule, TableModule],
  templateUrl: './text-logs.component.html',
  styleUrl: './text-logs.component.css'
})
export class TextLogsComponent {
  textLogsData = [];
}
