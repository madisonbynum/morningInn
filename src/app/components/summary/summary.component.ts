import { Component, OnInit } from '@angular/core';
import { StepCounterService } from 'src/app/service/step-counter.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {


  constructor(private stepCounter: StepCounterService) {

  }
  ngOnInit() {
    this.stepCounter.step3();
  }

}
