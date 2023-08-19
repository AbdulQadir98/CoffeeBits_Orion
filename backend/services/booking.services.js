const bookingException = require("../exceptions/index.js")

const db = require('../models')

const flightSchedules = db.schedule;

const createBooking = async () => {
  try {
    //   const bookings = {"id":"001"};
    //   return bookings;
    throw bookingException.createBookingError("booking not made")
  } catch (error) {
    throw error
  }
};

const getFlights = async (req, res) => {
  try {

    let startingLocation = req.params.startingLocation;
    let destination = req.params.endingLocation;
    let departureDate = req.params.departureDate;

    let flights = flightSchedules.findAll({
      where: {
        destinationPlanetId: destination,
        startingLocation: startingLocation,
        departureDate: departureDate
      }
    });

    res.status(200).send(flights)
    throw bookingException.createBookingError("booking not made")
  } catch (error) {
    throw error
  }
};

module.exports = { createBooking, getFlights }