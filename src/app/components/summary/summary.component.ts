import { Component, OnInit } from '@angular/core';
import { StepCounterService } from 'src/app/service/step-counter.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  // boolean below related to the step counter ngIf
  isOnRoomView = false;
  isOnBooking = false;
  isOnSummary = true;

  constructor(private stepCounter: StepCounterService) {

  this.isOnRoomView = this.stepCounter.isOnRoomView;
  this.isOnBooking = this.stepCounter.isOnBooking;
  this.isOnSummary = this.stepCounter.isOnSummary;

  }
  ngOnInit() {
  }

}
