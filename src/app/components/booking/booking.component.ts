import { Component, OnInit } from '@angular/core';
import { StepCounterService } from 'src/app/service/step-counter.service';
import { CreateGuestService } from 'src/app/services/create-guest.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  guest;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;


    constructor(private stepCounter: StepCounterService, private createGuest: CreateGuestService) {
      // private createGuest: CreateGuestService

    }
  ngOnInit() {
    this.stepCounter.step2();
  }

  submit() {
    const creation = {
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      email: this.email
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    // this.loginService.logger(credentials, this.user);
    this.createGuest.create(creation, httpOptions);

}
}

