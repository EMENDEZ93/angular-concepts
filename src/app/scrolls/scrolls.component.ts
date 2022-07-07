import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolls',
  templateUrl: './scrolls.component.html',
  styleUrls: ['./scrolls.component.css']
})
export class ScrollsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

}
