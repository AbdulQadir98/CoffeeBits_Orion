const bookingService = require("../services/booking.services.js");
const logger = require('../controllers/logger.js')

const createBooking = async (req, res) => {
  try {
    //const newBooking = await bookingService.createBooking();
    const newBooking = await bookingService.createBooking();
    res.status(201).json(newBooking);
    logger.bookingLogger.log('info','Sucessfully entered the data')
  } catch (error) {
    res.status(error.statusCode).json({ error: error.message });
    logger.bookingLogger.log('error','You stupid send data properly')
  }
};

const getFlights = async (req, res) => {
  try {
    const filteredFlights = await bookingService.getFlights(req.body);

    res.status(201).json(filteredFlights);
  } catch (error) {
    res.status(error.statusCode).json({ error: error.message });
  }
};

module.exports = { createBooking, getFlights };
