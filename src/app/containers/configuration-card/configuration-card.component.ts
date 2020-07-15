import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-configuration-card',
  templateUrl: './configuration-card.component.html',
  styleUrls: ['./configuration-card.component.css']
})
export class ConfigurationCardComponent implements OnInit {

  @Input() title: string;
  data: any;
  checkedRadioCardId: number;
  tickMarkClass: string;
  constructor() { }

  radioClickHandler(id) {
    if (this.checkedRadioCardId) {
      this.data[this.checkedRadioCardId - 1].isChecked = false;
    }
    this.checkedRadioCardId = id;
    this.data[this.checkedRadioCardId - 1].isChecked = true;
    this.tickMarkClass += ' checked-tick-mark';
  }
  getRadioCardClass(isChecked) {
    if (isChecked) {
      return 'radioCard radioCard-invert';
    } else {
      return 'radioCard';
    }
  }
  ngOnInit(): void {
    this.tickMarkClass = 'tick-mark';
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
