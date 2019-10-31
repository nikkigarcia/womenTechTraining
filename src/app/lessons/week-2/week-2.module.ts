import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Week2Component } from './week-2/week-2.component';
import { Day1Component } from './day-1/day-1.component';
import { Day2Component } from './day-2/day-2.component';
import { Day3Component } from './day-3/day-3.component';
import { Day4Component } from './day-4/day-4.component';
import { Day5Component } from './day-5/day-5.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Week2Component,
    Day1Component,
    Day2Component,
    Day3Component,
    Day4Component,
    Day5Component
  ],
  exports: [
    Week2Component
  ]
})
export class Week2Module { }
