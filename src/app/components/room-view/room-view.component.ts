import { Component, OnInit } from '@angular/core';
import { StepCounterService } from 'src/app/service/step-counter.service';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css']
})
export class RoomViewComponent implements OnInit {

  // boolean below related to the step counter ngIf

  constructor(private stepCounter: StepCounterService) {

  }

  ngOnInit() {
    this.stepCounter.step1();
  }

}
