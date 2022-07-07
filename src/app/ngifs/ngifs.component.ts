import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifs',
  templateUrl: './ngifs.component.html',
  styleUrls: ['./ngifs.component.css']
})
export class NgifsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  person = {
    name: 'Nicolas',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

}
