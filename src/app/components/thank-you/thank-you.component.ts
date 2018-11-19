import { Component, OnInit } from '@angular/core';
import { StepCounterService } from 'src/app/service/step-counter.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {

  isOnRoomView = false;
  isOnBooking = false;
  isOnSummary = false;

  constructor(private stepCounter: StepCounterService) {

  this.isOnRoomView = this.stepCounter.isOnRoomView;
  this.isOnBooking = this.stepCounter.isOnBooking;
  this.isOnSummary = this.stepCounter.isOnSummary;

  }

  ngOnInit() {
  }

}
