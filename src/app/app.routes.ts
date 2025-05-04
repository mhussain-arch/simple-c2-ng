import { Routes } from '@angular/router';
import { TextLogsComponent } from './text-logs/text-logs.component';
import { ScreenshotLogsComponent } from './screenshot-logs/screenshot-logs.component';

export const routes: Routes = [
    {
        path: 'text-logs',
        component: TextLogsComponent
    },
    {
        path: 'screenshots',
        component: ScreenshotLogsComponent
    },
    {
        path: '', redirectTo: '/text-logs', pathMatch: 'full'
    },
];
