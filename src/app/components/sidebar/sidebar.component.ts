import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { RoomsService } from 'src/app/service/rooms.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  roomObject: any[];


  constructor(config: NgbDropdownConfig, private router: Router, private roomServ: RoomsService) {
    config.autoClose = false;
  }
  ngOnInit() {

  }
submit() {
  const x = (<HTMLInputElement>document.getElementById('checkIn')).value;
  const y = (<HTMLInputElement>document.getElementById('checkOut')).value;

  const checkIn = x.split('-');
  const checkOut = y.split('-');
  const dateIn = checkIn[1] + '/' + checkIn[2] + '/' + checkIn[0];
  const dateOut = checkOut[1] + '/' + checkOut[2] + '/' + checkOut[0];

  const checkInObject = {
    'checkIn': dateIn,
    'checkOut': dateOut
  };

  this.roomServ.queryRoom();
  console.log(checkInObject);
  this.router.navigateByUrl('/viewRoom');
}

}
