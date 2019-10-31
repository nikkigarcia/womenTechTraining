import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LessonsModule } from './lessons/lessons.module';
import { HandyLinksModule } from './handy-links/handy-links.module';

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderLmntComponent } from './header-lmnt/header-lmnt.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderLmntComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    LessonsModule,
    HandyLinksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
