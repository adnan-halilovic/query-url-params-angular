import { CurrencyPipe, NgClass, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CARS } from './cars.constants';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CurrencyPipe, NgClass, NgOptimizedImage],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})
export class CarsComponent {
  cars = CARS;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    // # Using Snapshots (Simpler, Non-reactive approach)
    // const make = this.route.snapshot.queryParamMap.get('Make');
    // console.log('Make:', make);

    // #Using Observables (Reactive approach)
    // this.route.queryParamMap.subscribe((params) => {
    //   const make = params.get('Make');
    //   console.log('Make:', make);
    // })

    // # Get all params dynamically

    this.route.queryParamMap.subscribe((queryParamMap) =>{
      const allParams = {
        ...queryParamMap.keys.reduce(
          (acc, key) => ({...acc, [key]: queryParamMap.get(key)}),{}
        )
      }

      console.log('All query params: ', allParams);
    })
  }
}
