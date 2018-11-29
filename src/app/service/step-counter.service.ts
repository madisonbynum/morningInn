import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepCounterService {

  isOnRoomView;
  isOnBooking;
  isOnSummary;

  step1() {
    this.isOnRoomView = true;
    this.isOnBooking = false;
    this.isOnSummary = false;
  }

  step2() {
    this.isOnRoomView = false;
    this.isOnBooking = true;
    this.isOnSummary = false;
  }

  step3() {
    this.isOnRoomView = false;
    this.isOnBooking = false;
    this.isOnSummary = true;
  }

   step4() {
    this.isOnRoomView = false;
    this.isOnBooking = false;
    this.isOnSummary = false;
  }

  constructor() {

  }
}