import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-card',
  templateUrl: './radio-card.component.html',
  styleUrls: ['./radio-card.component.css']
})
export class RadioCardComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Output() radioClickedEvent = new EventEmitter<boolean>();
  @Input() disableRadio: boolean;

  isChecked: boolean;
  class = 'radioCard';
  constructor() { }

  radioCheckedHandler() {
    this.isChecked = true;
    this.class += ' radioCard-invert';
    this.radioClickedEvent.emit(true); // going to use disabled attribute to achieve the radio behavior
  }

  ngOnInit(): void {
    this.isChecked = false;
  }
}
