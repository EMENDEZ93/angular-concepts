import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disableds',
  templateUrl: './disableds.component.html',
  styleUrls: ['./disableds.component.css']
})
export class DisabledsComponent implements OnInit {

  disabled_button = true;

  constructor() { }

  ngOnInit(): void {
  }

}
