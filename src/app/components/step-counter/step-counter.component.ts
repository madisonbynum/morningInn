import { Component, OnInit } from '@angular/core';
import { StepCounterService } from 'src/app/service/step-counter.service';

@Component({
  selector: 'app-step-counter',
  templateUrl: './step-counter.component.html',
  styleUrls: ['./step-counter.component.css']
})
export class StepCounterComponent implements OnInit {


  constructor(private stepCounter: StepCounterService) {

  }

  ngOnInit() {
  }

}