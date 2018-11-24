import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
sel1;
smoking;
room;
pet;
house;
  constructor(config: NgbDropdownConfig, private router: Router,) {
    config.autoClose = false;
  }
  ngOnInit() {

  }
submit() {
  const x = (<HTMLInputElement>document.getElementById('checkIn')).value;
  const y = (<HTMLInputElement>document.getElementById('checkOut')).value;
  const NonSmoking = (<HTMLInputElement>document.getElementById('nonSmoking')).checked;
  const RoomService = (<HTMLInputElement>document.getElementById('roomService')).checked;
  const PetFriendly = (<HTMLInputElement>document.getElementById('petFriendly')).checked;
  const HouseKeeping = (<HTMLInputElement>document.getElementById('houseKeeping')).checked;
  const People = (<HTMLInputElement>document.getElementById('sel1')).value;

  const checkIn = x.split('-');
  const checkOut = y.split('-');
  const dateIn = checkIn[1] + '/' + checkIn[2] + '/' + checkIn[0];
  const dateOut = checkOut[1] + '/' + checkOut[2] + '/' + checkOut[0];

  const checkInObject = {
    checkin: dateIn,
    checkout: dateOut,
    smoking: NonSmoking,
    roomService: RoomService,
    petFriendly: PetFriendly,
    houseKeeping: HouseKeeping,
    people: People
  };

  this.router.navigateByUrl('/viewRoom');
}

isChecked(item1) {
if (item1 === 'on') {
 console.log(true);
} else {
  console.log(false);
}
}

}
