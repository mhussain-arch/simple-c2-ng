import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
@Component({
  selector: 'app-root',
  imports: [ButtonModule, RatingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
