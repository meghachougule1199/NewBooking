export class BookingDto {

    dateOfBooking:string;
    sourceAirport:string;
    destinationAirport:string;
    timeOfBooking:number;
    
    constructor(
        dateOfBooking:string,
        sourceAirport:string,
        destinationAirport:string,
        timeOfBooking:number
    ){
        this.dateOfBooking=dateOfBooking;
        this.sourceAirport=sourceAirport;
        this.destinationAirport=destinationAirport;
        this.timeOfBooking=timeOfBooking;
    }
}
