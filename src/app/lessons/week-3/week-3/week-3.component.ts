import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'week-3',
  templateUrl: './week-3.component.html',
  styleUrls: ['./week-3.component.css']
})
export class Week3Component implements OnInit {
  @Output() scrolledTo = new EventEmitter();
  day: number;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.day = params['day'];
    });
  }

  scrollIntoView(event) {
    this.scrolledTo.emit(event);
  }

}
