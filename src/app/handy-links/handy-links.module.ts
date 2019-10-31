import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import routing
import { HandyLinksRoutes } from './handy-links.routing';

import { HandyLinksComponent } from './handy-links.component';

@NgModule({
  imports: [
    CommonModule,
    HandyLinksRoutes
  ],
  declarations: [
    HandyLinksComponent
  ]
})
export class HandyLinksModule { }
