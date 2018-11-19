import { Component, OnInit } from '@angular/core';
import { StepCounterService } from 'src/app/service/step-counter.service';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css']
})
export class RoomViewComponent implements OnInit {

  // boolean below related to the step counter ngIf
  isOnRoomView = true;
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
