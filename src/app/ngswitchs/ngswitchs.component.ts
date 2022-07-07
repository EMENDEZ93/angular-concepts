import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitchs',
  templateUrl: './ngswitchs.component.html',
  styleUrls: ['./ngswitchs.component.css']
})
export class NgswitchsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  person = {
    name: 'Nicolas',
    age: 18
  }

}
