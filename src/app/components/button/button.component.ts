import { Component, OnInit } from '@angular/core';
import { ProgressbarService } from 'src/app/services/progressbar.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor(private progressbarService: ProgressbarService) { }

  clickHandler() {
    this.progressbarService.incrementIndex();
  }

  ngOnInit(): void {
  }

}
