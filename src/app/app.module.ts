import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RoomViewComponent } from './components/room-view/room-view.component';
import { BookingComponent } from './components/booking/booking.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { GeneralNavbarComponent } from './components/general-navbar/general-navbar.component';
import { StepCounterComponent } from './components/step-counter/step-counter.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TransitionsComponent } from './components/transitions/transitions.component';

import { CreateGuestService } from './services/create-guest.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomViewComponent,
    BookingComponent,
    SummaryComponent,
    ThankYouComponent,
    GeneralNavbarComponent,
    StepCounterComponent,
    SidebarComponent,
    TransitionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CreateGuestService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
