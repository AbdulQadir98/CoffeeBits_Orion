const bookingException = require("../exceptions/index.js");

const createBooking = async () => {
  try {
    //   const bookings = {"id":"001"};
    //   return bookings;
    throw bookingException.createBookingError("booking not made");
  } catch (error) {
    throw error;
  }
};

const getFlights = async (req) => {
  try {
    const filteredFlights = {
      flightDetails: [
        {
          flightName: "Flight 123",
          price: 250,
          departureTime: "08:00:00",
          duration: "2h 30m",
          flightIconUrl: "https://example.com/flight-icons/flight123.png",
        },
        {
          flightName: "Airline Express",
          price: 180,
          departureTime: "10:30:00",
          duration: "3h 15m",
          flightIconUrl: "https://example.com/flight-icons/airlineexpress.png",
        },
        {
          flightName: "SkyJet 456",
          price: 320,
          departureTime: "12:45:00",
          duration: "2h 50m",
          flightIconUrl: "https://example.com/flight-icons/skyjet456.png",
        },
        {
          flightName: "Wingspan Airlines",
          price: 200,
          departureTime: "15:00:00",
          duration: "2h 15m",
          flightIconUrl:
            "https://example.com/flight-icons/wingspanairlines.png",
        },
        {
          flightName: "BlueSkies Airways",
          price: 150,
          departureTime: "17:30:00",
          duration: "2h 45m",
          flightIconUrl:
            "https://example.com/flight-icons/blueskiesairways.png",
        },
        {
          flightName: "SwiftFlights",
          price: 280,
          departureTime: "20:00:00",
          duration: "3h",
          flightIconUrl: "https://example.com/flight-icons/swiftflights.png",
        },
        {
          flightName: "AeroConnect",
          price: 210,
          departureTime: "22:15:00",
          duration: "2h 30m",
          flightIconUrl: "https://example.com/flight-icons/aeroconnect.png",
        },
        {
          flightName: "AirWings International",
          price: 300,
          departureTime: "02:00:00",
          duration: "4h",
          flightIconUrl:
            "https://example.com/flight-icons/airwingsinternational.png",
        },
        {
          flightName: "FlyRight Airlines",
          price: 260,
          departureTime: "06:30:00",
          duration: "2h 20m",
          flightIconUrl:
            "https://example.com/flight-icons/flyrightairlines.png",
        },
        {
          flightName: "JetStream Flights",
          price: 180,
          departureTime: "09:45:00",
          duration: "2h 40m",
          flightIconUrl:
            "https://example.com/flight-icons/jetstreamflights.png",
        },
      ],
    };
    return filteredFlights;
    
    throw bookingException.createBookingError(
      "something wrong in rendering filtered flights"
    );
  } catch (error) {
    throw error;
  }
};

module.exports = { createBooking, getFlights };
