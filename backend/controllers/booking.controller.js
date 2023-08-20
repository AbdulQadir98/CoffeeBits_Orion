const bookingService = require("../services/booking.services.js");
const { HTTP_STATUS, SUCCESS_MESSAGES } = require("../constants/constants");
const { logger } = require("../utils/index.js");

const createBooking = async (req, res) => {
  try {
    const newBooking = await bookingService.createBooking(req.body);

    res.status(HTTP_STATUS.CREATED).json(newBooking);
    logger.info(
      SUCCESS_MESSAGES.BOOKING_CREATED + "\n" + JSON.stringify(newBooking)
    );
  } catch (error) {
    res.status(error.statusCode).json({ error: error.message });
    logger.error(error.message);
  }
};

const getFlights = async (req, res) => {
  try {
    const filteredFlights = await bookingService.getFlights(req.body);

    res.status(HTTP_STATUS.OK).json(filteredFlights);

    logger.info(
      SUCCESS_MESSAGES.BOOKING_CREATED + "\n" + JSON.stringify(filteredFlights)
    );
  } catch (error) {
    res.status(error.statusCode).json({ error: error.message });
    logger.error(error.message);
  }
};

module.exports = { createBooking, getFlights };
