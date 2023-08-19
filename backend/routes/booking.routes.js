const express = require("express");

const bookingRouter = express.Router();

//import controllers
const {
  createBooking,
  getFlights,
} = require("../controllers/booking.controller.js");

//Routes
bookingRouter.post("/createBooking", createBooking);
bookingRouter.post("/getFlights", getFlights);

module.exports = (app) => {
  app.use("/api/v1/booking", bookingRouter);
};
