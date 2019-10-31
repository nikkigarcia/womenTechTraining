import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'day-3',
  templateUrl: './day-3.component.html',
  styleUrls: ['./day-3.component.css']
})
export class Day3Component implements OnInit {
  @Output() scrolledTo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  scrollIntoView(id) {
    this.scrolledTo.emit(id);
  }

}
