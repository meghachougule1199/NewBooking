import { Component } from '@angular/core';
import { Booking } from '../booking';
import { BookingDetailsService } from '../booking-details.service';

@Component({
  selector: 'app-bookig-details',
  templateUrl: './bookig-details.component.html',
  styleUrls: ['./bookig-details.component.css']
})
export class BookigDetailsComponent {

__bookingService:BookingDetailsService;

b:Booking = new Booking('','','','','','');

constructor(bookingService:BookingDetailsService)
{
  this.__bookingService= bookingService;
}

doFormSubmit()
{
  console.log("form submit button clicked")
  console.log(this.b);
  this.__bookingService.Booking(this.b);

 
}

readBooking(name:string,mobileNumber:string,dateOfBooking:string,sourceAirport:string,destinationAirport:string,timeOfBooking:string)
{
  console.log(sourceAirport+" "+destinationAirport);
  let bookingFromUser:Booking = new Booking(name,mobileNumber,dateOfBooking,sourceAirport,destinationAirport,timeOfBooking);
  this.__bookingService.Booking(bookingFromUser);
}
}
