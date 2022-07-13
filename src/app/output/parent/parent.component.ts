import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  imgParent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onLoaded(img: string) {
    console.log('log padre', img);
  }

}
