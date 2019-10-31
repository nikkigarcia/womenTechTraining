import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'day-4',
  templateUrl: './day-4.component.html',
  styleUrls: ['./day-4.component.css']
})
export class Day4Component implements OnInit {
  @Output() scrolledTo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  scrollIntoView(id) {
    this.scrolledTo.emit(id);
  }

}
