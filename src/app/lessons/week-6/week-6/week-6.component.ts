import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'week-6',
  templateUrl: './week-6.component.html',
  styleUrls: ['./week-6.component.css']
})
export class Week6Component implements OnInit {
  @Input() day: number;
  @Output() scrolledTo = new EventEmitter();
  
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
