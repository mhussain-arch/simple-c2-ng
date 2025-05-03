import { Routes } from '@angular/router';
import { TextLogsComponent } from './text-logs/text-logs.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/text-logs', pathMatch: 'full'
    },
    {
        path: 'text-logs',
        component: TextLogsComponent
    }
];
