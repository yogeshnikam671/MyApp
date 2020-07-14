import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-cards',
  templateUrl: './radio-cards.component.html',
  styleUrls: ['./radio-cards.component.css']
})
export class RadioCardsComponent implements OnInit {

  data: any;
  disableRadio: boolean;
  constructor() { }

  disableRadioButton() {
    console.log('hi');
    this.disableRadio = true;
  }

  ngOnInit(): void {
    this.disableRadio = false;
    this.data = [
      {
        title: 'A Product Title',
        description: 'Lorem ipsum fdk fdanflk alait gjialebt nckalitej fkjadliebtna nvkalit'
      },
      {
        title: 'A Product Title',
        description: 'Lorem ipsum fdk fdanflk alait gjialebt nckalitej fkjadliebtna nvkalit'
      },
      {
        title: 'A Product Title',
        description: 'Lorem ipsum fdk fdanflk alait gjialebt nckalitej fkjadliebtna nvkalit'
      },
      {
        title: 'A Product Title',
        description: 'Lorem ipsum fdk fdanflk alait gjialebt nckalitej fkjadliebtna nvkalit'
      },
      {
        title: 'A Product Title',
        description: 'Lorem ipsum fdk fdanflk alait gjialebt nckalitej fkjadliebtna nvkalit'
      },
      {
        title: 'A Product Title',
        description: 'Lorem ipsum fdk fdanflk alait gjialebt nckalitej fkjadliebtna nvkalit'
      }
    ];
  }

}
