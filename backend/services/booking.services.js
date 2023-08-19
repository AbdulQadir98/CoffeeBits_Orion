const bookingException = require("../exceptions/index.js");
const helper = require("../helpers/seatCount.helpers.js");

const db = require("../models");

const flightSchedules = db.schedule;
const flightBooking = db.booking;
const flightPassenger = db.passenger;

const createBooking = async (bookingInfo) => {
  try {
    console.log(bookingInfo);
    const booking = await flightBooking.create({flightScheduleScheduleId : bookingInfo.scheduleId,} );

    const passengerData = bookingInfo.passengers;

    const passengers = await flightPassenger.bulkCreate(
      passengerData.map((passenger) => ({
        name : passenger.name,
        age : passenger.age,
        gender : passenger.gender,
        class : passenger.class,
        food : passenger.food,
        bookingBookingId: booking.bookingId
      }))
    );

    return booking;

  } catch (error) {
    throw error;
  }
};

const getFlights = async (passengerInput) => {
  try {
    let startingLocation = passengerInput.startingLocation;
    let destination = passengerInput.endingLocation;
    let departureDate = passengerInput.departureDate;
    let tripType = passengerInput.oneway;
    let returnDate = passengerInput.returnDate;
    // const seatCount = helper.getSeatCountForClass(passengers);

    let result = {
      "oneWay":null,
      "returnFlights" :null
    };
   
    result.oneWay = getFlightResults(startingLocation,destination,departureDate);

    if(tripType)
    {
      result.returnFlights = getFlightResults(destination,startingLocation,returnDate);
    }
    
    return result;
  
  } catch (error) {
    throw error;
  }
};

const getFlightResults = (startingLocation,destination,departureDate) => {
  let flights = flightSchedules.findAll({
    where: {
      destinationPlanetId: destination,
      startPlanetId: startingLocation,
      departureDate : departureDate
    },
  });

  return flights;
};


module.exports = { createBooking, getFlights };
