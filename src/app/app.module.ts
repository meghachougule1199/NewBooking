import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookigDetailsComponent } from './bookig-details/bookig-details.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { Router } from '@angular/router';
//import { ViewBookingFEComponent } from './view-booking-fe/view-booking-fe.component';

const allLinks:Routes=[
  {path:'bookingdetails',component:BookigDetailsComponent},
  {path:'viewbooking',component:ViewBookingComponent},
 
]

@NgModule({
  declarations: [
    AppComponent,
    BookigDetailsComponent,
    ViewBookingComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allLinks),FormsModule,CommonModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
