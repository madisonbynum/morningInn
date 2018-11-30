import { Component, OnInit } from '@angular/core';
import { StepCounterService } from 'src/app/service/step-counter.service';
import { RoomsService } from 'src/app/service/rooms.service';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css']
})
export class RoomViewComponent implements OnInit {

  constructor(private stepCounter: StepCounterService, private roomServ: RoomsService) {

  }

  ngOnInit() {
    console.log(this.roomServ.room);
    this.stepCounter.step1();
  }

}
