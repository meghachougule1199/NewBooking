import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './booking';
import { BookingDto } from './booking-dto';

@Injectable({
  providedIn: 'root'
})
export class BookingDetailsService {

  baseURL:string = 'http://localhost:9090';
  bookingByDestinationEndPoint:string=this.baseURL+'/booking/bookingsByDestination';
  bookingByDateEndPoint=this.baseURL+'/booking/bookingsBydate';
  bookingByTimeEndPoint=this.baseURL+'/booking/bookingsByTime';
  allBookingEndPoint=this.baseURL+'/booking/view';

  bookingArr:Booking[] = [];

  constructor(private http:HttpClient) { 

    console.log("Inside Constructor "+this.bookingByDestinationEndPoint);

  }

  getBookingByDestinationAirport(destinationAirport:string):Observable<BookingDto[]>{
    console.log("Inside Method 1 "+this.bookingByDestinationEndPoint);
    this.bookingByDestinationEndPoint=this.bookingByDestinationEndPoint+'/'+destinationAirport;
    console.log("After adding name 2 "+this.bookingByDestinationEndPoint);

    return this.http.get<BookingDto[]>(`${this.bookingByDestinationEndPoint}`);
  }
  getBookingByDate(dateOfBooking:string):Observable<BookingDto[]>{
    console.log("Inside Method 1 "+this.bookingByDateEndPoint);
    this.bookingByDateEndPoint=this.bookingByDateEndPoint+'/'+dateOfBooking;
    console.log("After adding date 2 "+this.bookingByDateEndPoint);

    return this.http.get<BookingDto[]>(`${this.bookingByDateEndPoint}`);
  }


  getBookingByTime(timeOfBooking:string):Observable<BookingDto[]>{
    console.log("Inside Method 1 "+this.bookingByTimeEndPoint);
    this.bookingByTimeEndPoint=this.bookingByTimeEndPoint+'/'+timeOfBooking;
    console.log("After adding time 2 "+this.bookingByTimeEndPoint);

    return this.http.get<BookingDto[]>(`${this.bookingByTimeEndPoint}`);
  }


 

  Booking(bookingFromUser:Booking)
  {
    
    this.bookingArr.push(bookingFromUser); 
    console.log("Inside Passenger Service : Passenger Added "+bookingFromUser.sourceAirport);
    console.log(" Total Passengers Are :- "+this.bookingArr.length);
    
  }

  getBookingArr():Booking[]
  {
    return this.bookingArr;
  }

  
  getAllBookingFromSpring():Observable<BookingDto[]>{
    console.log("inside service :"+this.allBookingEndPoint);
    return this.http.get<BookingDto[]>(`${this.allBookingEndPoint}`);
  }

  

}
