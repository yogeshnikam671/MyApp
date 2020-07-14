import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-card',
  templateUrl: './radio-card.component.html',
  styleUrls: ['./radio-card.component.css']
})
export class RadioCardComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Output() radioClickedEvent = new EventEmitter<number>();

  @Input() isChecked: boolean;
  @Input() className: string;
  @Input() id: number;
  constructor() { }

  radioCheckedHandler() {
    this.radioClickedEvent.emit(this.id);
  }

  ngOnInit(): void {
    if (!this.className) {
      this.className = 'radioCard';
    }
  }
}
