import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  person = {
    name: 'DEZMEN',
    age: 50,
    avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQEybRIxP6Soww/profile-displayphoto-shrink_200_200/0/1592602093579?e=1662595200&v=beta&t=6gKUNcYOpdebjAt_0mSahLavIsrNwxLpw8Cq4Yv8T0U'
  }
  
}
