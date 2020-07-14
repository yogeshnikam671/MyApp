import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-cards',
  templateUrl: './radio-cards.component.html',
  styleUrls: ['./radio-cards.component.css']
})
export class RadioCardsComponent implements OnInit {

  @Output() radiobuttonClicked = new EventEmitter<any>();
  data: any;
  class: string;
  checkedRadioCardId: number;
  constructor() { }

  radioClickHandler(id) {
    this.radiobuttonClicked.emit();
    if (this.checkedRadioCardId) {
      this.data[this.checkedRadioCardId - 1].isChecked = false;
    }
    this.checkedRadioCardId = id;
    this.data[this.checkedRadioCardId - 1].isChecked = true;
  }

  getClass(isChecked) {
    if (isChecked) {
      return 'radioCard radioCard-invert';
    } else {
      return 'radioCard';
    }
  }

  ngOnInit(): void {
    this.class = 'radioCard';
    this.data = [
      {
        id: 1,
        title: 'A Product Title',
        description: 'Lorem ipsum fdk fdanflk alait gjialebt nckalitej fkjadliebtna nvkalit',
        isChecked: false
      },
      {
        id: 2,
        title: 'A Product Title',
        description: 'Lorem ipsum fdk fdanflk alait gjialebt nckalitej fkjadliebtna nvkalit',
        isChecked: false
      },
      {
        id: 3,
        title: 'A Product Title',
        description: 'Lorem ipsum fdk fdanflk alait gjialebt nckalitej fkjadliebtna nvkalit',
        isChecked: false
      },
      {
        id: 4,
        title: 'A Product Title',
        description: 'Lorem ipsum fdk fdanflk alait gjialebt nckalitej fkjadliebtna nvkalit',
        isChecked: false
      },
      {
        id: 5,
        title: 'A Product Title',
        description: 'Lorem ipsum fdk fdanflk alait gjialebt nckalitej fkjadliebtna nvkalit',
        isChecked: false
      },
      {
        id: 6,
        title: 'A Product Title',
        description: 'Lorem ipsum fdk fdanflk alait gjialebt nckalitej fkjadliebtna nvkalit',
        isChecked: false
      }
    ];
  }

}
