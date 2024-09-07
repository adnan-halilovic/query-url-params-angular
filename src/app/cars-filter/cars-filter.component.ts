import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cars-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cars-filter.component.html',
  styleUrl: './cars-filter.component.scss'
})
export class CarsFilterComponent {
// make = new FormControl('Honda');

// carsFilter = new FormGroup({
//   make: new FormControl('Honda'),
//   year: new FormControl(2000),
// });

carsFilter: FormGroup;
years: number[] = [];

constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute){
  this.carsFilter = this.fb.group({
    Make: ['Hyundai', Validators.required],
    Model: ['Elantra', Validators.required],
    Year: [2019, [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
    Mileage: [28000, [Validators.required, Validators.min(0)]],
    Type: ['Sedan', Validators.required],
    Color: ['Blue', Validators.required],
    Transmission: ['Automatic', Validators.required],
    FuelType: ['Gasoline', Validators.required],
    Price: [10000, [Validators.required, Validators.min(0)]],
    Available: [true]
  })

  this.generateYears();
}

generateYears(){
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= 1900; year--){
    this.years.push(year);
  }
}

onSubmit(){
  // console.log('Form group value: ', this.carsFilter.value);
  this.router.navigate([], {
    relativeTo: this.route,
    queryParams: this.carsFilter.value,
    queryParamsHandling: 'merge'
  })
}

onReset(){
  // this.make.setValue('');
  this.carsFilter.setValue({
    make: '',
  })
}
}
