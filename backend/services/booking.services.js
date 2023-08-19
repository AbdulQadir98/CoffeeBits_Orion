const bookingException = require("../exceptions/index.js");
const helper = require("../helpers/seatCount.helpers.js");

const db = require("../models");

const flightSchedules = db.schedule;

const createBooking = async () => {
  try {
    //   const bookings = {"id":"001"};
    //   return bookings;
    throw bookingException.createBookingError("booking not made");
  } catch (error) {
    throw error;
  }
};

const getFlights = async (passengerInput) => {
  try {
    passengers = [
      {
        name: "John Doe",
        age: 30,
        gender: "male",
        class: "business",
        food: "non-veg",
      },
      {
        name: "Jane Smith",
        age: 25,
        gender: "female",
        class: "economic",
        food: "veg",
      },
      {
        name: "Alex Johnson",
        age: 45,
        gender: "other",
        class: "first",
        food: "non-veg",
      },
      {
        name: "Emily Davis",
        age: 28,
        gender: "female",
        class: "economic",
        food: "veg",
      },
      {
        name: "Michael Brown",
        age: 55,
        gender: "male",
        class: "business",
        food: "non-veg",
      },
      {
        name: "Sophia Lee",
        age: 22,
        gender: "female",
        class: "economic",
        food: "veg",
      },
      {
        name: "Ethan Martinez",
        age: 32,
        gender: "male",
        class: "first",
        food: "non-veg",
      },
      {
        name: "Olivia Wilson",
        age: 29,
        gender: "female",
        class: "business",
        food: "veg",
      },
      {
        name: "Noah Taylor",
        age: 40,
        gender: "male",
        class: "economic",
        food: "non-veg",
      },
      {
        name: "Ava Anderson",
        age: 27,
        gender: "female",
        class: "first",
        food: "veg",
      },
    ];

    const seatCount = helper.getSeatCountForClass(passengers);
    console.log(seatCount);

    let startingLocation = passengerInput.startingLocation;
    let destination = passengerInput.endingLocation;
    let departureDate = passengerInput.departureDate;

    let flights = flightSchedules.findAll({
      where: {
        destinationPlanetId: destination,
        startPlanetId: startingLocation,
        departureDate: departureDate,
      },
    });

    return flights;
    // throw bookingException.createBookingError("booking not made")
  } catch (error) {
    throw error;
  }
};

module.exports = { createBooking, getFlights };
