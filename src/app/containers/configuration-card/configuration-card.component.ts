import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-configuration-card',
  templateUrl: './configuration-card.component.html',
  styleUrls: ['./configuration-card.component.css']
})
export class ConfigurationCardComponent implements OnInit {

  @Input() title: string;
  data: any;
  class: string;
  checkedRadioCardId: number;
  colors: any;
  constructor() { }

  radioClickHandler(id) {
    if (this.checkedRadioCardId) {
      this.data[this.checkedRadioCardId - 1].isChecked = false;
    }
    this.checkedRadioCardId = id;
    this.data[this.checkedRadioCardId - 1].isChecked = true;
    this.tickmarkHandler();
  }
  getClass(isChecked) {
    if (isChecked) {
      return 'radioCard radioCard-invert';
    } else {
      return 'radioCard';
    }
  }
  tickmarkHandler() {
    this.colors.fill = '#FFCC11';
    this.colors.stroke = '#43485C';
  }
  ngOnInit(): void {
    this.class = 'radioCard';
    this.colors = {
      fill: '#DDDEDF',
      stroke: '#ADAFB2'
    };
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
