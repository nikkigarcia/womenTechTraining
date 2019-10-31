import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'day-5',
  templateUrl: './day-5.component.html',
  styleUrls: ['./day-5.component.css']
})
export class Day5Component implements OnInit {
  @Output() scrolledTo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  scrollIntoView(id) {
    this.scrolledTo.emit(id);
  }

}
