import { Component, input, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { DrawerModule } from 'primeng/drawer';
import { DividerModule } from 'primeng/divider';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, PanelModule, ButtonModule, RatingModule, DrawerModule, DividerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  visible = signal(false);
}
