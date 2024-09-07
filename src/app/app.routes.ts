import { Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';

export const routes: Routes = [
    {path: '**', redirectTo: 'cars'},
    {path: 'cars', component: CarsComponent}
];
