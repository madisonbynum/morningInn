import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RoomViewComponent } from './components/room-view/room-view.component';
import { BookingComponent } from './components/booking/booking.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { EmployeeLoginComponent } from './components/employee-login/employee-login.component';
import { EmployeeHomeComponent } from './components/employee-home/employee-home.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { BlockRoomComponent } from './components/block-room/block-room.component';
import { CancelResComponent } from './components/cancel-res/cancel-res.component';


const routes: Routes = [{
  component: CancelResComponent,
  path: 'cancelRes'
  }, {
  component: BlockRoomComponent,
  path: 'blockRoom'
  }, {
  component: CheckOutComponent,
  path: 'checkOut'
  }, {
  component: CheckInComponent,
  path: 'checkIn'
  }, {
  component: EmployeeHomeComponent,
  path: 'employeeHome'
  }, {
  component: EmployeeLoginComponent,
  path: 'employeeLogin'
  }, {
  component: HomeComponent,
  path: ''
  }, {
  component: RoomViewComponent,
  path: 'viewRoom'
  }, {
  component: BookingComponent,
  path: 'booking'
  }, {
  component: SummaryComponent,
  path: 'summary'
  }, {
  component: ThankYouComponent,
  path: 'thankYou'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
