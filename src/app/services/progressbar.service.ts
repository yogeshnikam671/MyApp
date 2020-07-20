import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressbarService{

  currentStageIndex = 0;
  currentStageIdxSubject: BehaviorSubject<number> = new BehaviorSubject(this.currentStageIndex);
  currentStageIdxObs = this.currentStageIdxSubject.asObservable();
  constructor() { }

  public incrementIndex() {
    this.currentStageIndex++;
    this.currentStageIdxSubject.next(this.currentStageIndex);
  }

  public setCurrentStageIndex(idx) {
    this.currentStageIndex = idx;
    this.currentStageIdxSubject.next(idx);
  }
}
