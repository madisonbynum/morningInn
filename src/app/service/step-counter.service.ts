import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepCounterService {

  isOnRoomView;
  isOnBooking;
  isOnSummary;

  constructor() {

  }
}
