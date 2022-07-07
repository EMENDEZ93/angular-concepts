import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngmodels',
  templateUrl: './ngmodels.component.html',
  styleUrls: ['./ngmodels.component.css']
})
export class NgmodelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  person = {
    name: 'Dezmen',
    age: 18,
  }

}
