import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'day-1',
  templateUrl: './day-1.component.html',
  styleUrls: ['./day-1.component.css']
})
export class Day1Component implements OnInit {
  @Output() scrolledTo = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  scrollIntoView(id) {
    this.scrolledTo.emit(id);
  }

}
