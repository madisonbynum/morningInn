import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RoomViewComponent } from './components/room-view/room-view.component';
import { BookingComponent } from './components/booking/booking.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

const routes: Routes = [{
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
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
