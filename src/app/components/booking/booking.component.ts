import { Component, OnInit } from '@angular/core';
import { StepCounterService } from 'src/app/service/step-counter.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {


    constructor(private stepCounter: StepCounterService) {

    }
  ngOnInit() {
    this.stepCounter.step2();
  }

}
