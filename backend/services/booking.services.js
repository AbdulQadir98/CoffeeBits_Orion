const { errorMessage } = require("../exceptions/index.js");
const {
  HTTP_STATUS,
  ERROR_MESSAGES,
  REQUIRED_FIELDS,
} = require("../constants/constants");
const {
  dateDifferenceValidCheck,
  getSeatCountForClass,
} = require("../helpers/index.js");
const { checkEmptyField, checkValidDate } = require("../utils/index.js");
const { Op } = require("sequelize");
const db = require("../models");

const flightSchedules = db.schedule;
const flightBooking = db.booking;
const flightPassenger = db.passenger;

const createBooking = async (bookingInfo) => {
  try {
    console.log(bookingInfo);
    const booking = await flightBooking.create({
      flightScheduleScheduleId: bookingInfo.scheduleId,
    });

    const passengerData = bookingInfo.passengers;

    const passengers = await flightPassenger.bulkCreate(
      passengerData.map((passenger) => ({
        name: passenger.name,
        age: passenger.age,
        gender: passenger.gender,
        class: passenger.class,
        food: passenger.food,
        bookingBookingId: booking.bookingId,
      }))
    );

    return booking;
  } catch (error) {
    throw error;
  }
};

const getFlights = async (passengerInput) => {
  try {
    const missingFields = checkEmptyField(
      passengerInput,
      REQUIRED_FIELDS.FLIGHT_SCHEDULE_SEARCH
    );

    if (missingFields.length === 0) {

      let result = {
        "oneWay": null,
        "returnFlights": null
      };

      const startingLocation = passengerInput.startingLocation;
      const destination = passengerInput.endingLocation;
      const departureDate = new Date(passengerInput.departureDate);
      const tripType = passengerInput.oneway;
      const returnDate = new Date(passengerInput.returnDate);
      const seatCount = getSeatCountForClass(passengerInput.passengers);

      if (
        !tripType &&
        checkValidDate(departureDate) &&
        checkValidDate(returnDate)
      ) {
        if (dateDifferenceValidCheck(departureDate, returnDate)) {
          result.returnFlights = await getFlightResults(
            destination,
            startingLocation,
            returnDate,
            seatCount
          );

          result.oneWay = await getFlightResults(
            startingLocation,
            destination,
            departureDate,
            seatCount
          );
          return result;
        } else {
          throw errorMessage(
            ERROR_MESSAGES.BAD_REQUEST,
            HTTP_STATUS.BAD_REQUEST
          );
        }
      } else if (checkValidDate(departureDate)) {
        result.oneWay = await getFlightResults(
          startingLocation,
          destination,
          departureDate,
          seatCount
        );
        return result;
      } else {
        throw errorMessage(ERROR_MESSAGES.BAD_REQUEST, HTTP_STATUS.BAD_REQUEST);
      }
    } else {
      throw errorMessage(ERROR_MESSAGES.BAD_REQUEST, HTTP_STATUS.BAD_REQUEST);
    }
  } catch (error) {
    throw error;
  }
};

const getFlightResults = (
  startingLocation,
  destination,
  departureDate,
  seatCount
) => {
  console.log(seatCount.business);
  let flights = flightSchedules.findAll({
    where: {
      destinationPlanetId: destination,
      startPlanetId: startingLocation,
      departureDate: departureDate,
      businessClassSeatCount: {
        [Op.gte]: seatCount.business,
      },
      economyClassSeatCount: {
        [Op.gte]: seatCount.economy,
      },
      firstClassSeatCount: {
        [Op.gte]: seatCount.first,
      },
    },
  });

  return flights;
};

module.exports = { createBooking, getFlights };
