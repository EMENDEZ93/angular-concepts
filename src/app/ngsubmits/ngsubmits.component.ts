import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngsubmits',
  templateUrl: './ngsubmits.component.html',
  styleUrls: ['./ngsubmits.component.css']
})
export class NgsubmitsComponent implements OnInit {

  constructor() { }

  register = {
    name: '',
    email: '',
    password: '',
  }

  ngOnInit(): void {
  }

  onRegister() {
    console.log(this.register);
  }

}
