export class Booking {
    name:string;
    mobileNumber:string;
    dateOfBooking:string;
    sourceAirport:string;
    destinationAirport:string;
    timeOfBooking:string;

    
    constructor(
        name:string,
        mobileNumber:string,
        dateOfBooking:string,
        sourceAirport:string,
        destinationAirport:string,
        timeOfBooking:string,
    ){
        this.name=name;
        this.mobileNumber=mobileNumber;
        this.dateOfBooking=dateOfBooking;
        this.sourceAirport=sourceAirport;
        this.destinationAirport=destinationAirport;
        this.timeOfBooking=timeOfBooking;
    }
}
