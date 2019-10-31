import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day1Component } from './day-1/day-1.component';
import { Day2Component } from './day-2/day-2.component';
import { Day3Component } from './day-3/day-3.component';
import { Day4Component } from './day-4/day-4.component';
import { Week1Component } from './week-1/week-1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Day1Component, 
    Day2Component, 
    Day3Component, 
    Day4Component,
    Week1Component 
  ],
  exports: [
    Week1Component
  ]
})
export class Week1Module { }
