import { Component, OnInit } from '@angular/core';
import { ProgressbarService } from 'src/app/services/progressbar.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  stages: string[];
  currentStageIdx: number;
  constructor(private progressbarService: ProgressbarService) { }

  isLastStage(idx) {
    return idx === this.stages.length - 1;
  }

  getStageClass(idx) {
    if (this.isLastStage(idx)) {
      return 'stage last-stage';
    }
    return 'stage';
  }

  isCompletedStage(idx) {
    return idx <= this.currentStageIdx;
  }

  ngOnInit(): void {
    this.progressbarService.currentStageIdxObs.subscribe(value => {
      this.currentStageIdx = value;
      console.log('Component', value);
    })
    this.stages = ['Model', 'Undercarriage System', 'Undercarriage Component', 'Component Options', 'Part Options'];
  }

}
