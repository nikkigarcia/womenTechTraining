import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'day-2',
  templateUrl: './day-2.component.html',
  styleUrls: ['./day-2.component.css']
})
export class Day2Component implements OnInit {
  @Output() scrolledTo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  scrollIntoView(id) {
    this.scrolledTo.emit(id);
  }

}
