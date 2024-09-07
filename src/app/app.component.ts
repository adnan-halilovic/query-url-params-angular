import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarsFilterComponent } from './cars-filter/cars-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarsFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-forms';
}
