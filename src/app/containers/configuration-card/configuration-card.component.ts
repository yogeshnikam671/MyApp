import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration-card',
  templateUrl: './configuration-card.component.html',
  styleUrls: ['./configuration-card.component.css']
})
export class ConfigurationCardComponent implements OnInit {

  colors: any;
  constructor() { }

  ngOnInit(): void {
    this.colors = {
      fill: "#DDDEDF",
      stroke: "#ADAFB2"
    }
  }

  tickmarkHandler() {
    this.colors.fill = "#FFCC11";
    this.colors.stroke = "#43485C";
  }
}
