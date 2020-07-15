import { Component, OnInit, Input} from '@angular/core';
import { ConfigurationCardService } from '../../services/configuration-card.service';

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
  constructor(private configurationCardService: ConfigurationCardService) { }

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
    this.configurationCardService.getJSON().subscribe(data => {
      this.data = data;
    });
  }
}
