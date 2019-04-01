import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.setTitle('Women Tech Training');
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  showScrollButton() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      document.getElementById('scroll-to-top').style.display = "block";
    } else {
      document.getElementById('scroll-to-top').style.display = "none";
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
