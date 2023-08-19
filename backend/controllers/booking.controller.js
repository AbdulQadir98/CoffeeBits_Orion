const bookingService = require("../services/booking.services.js");

const createBooking = async (req, res) => {
  try {
    const newBooking = await bookingService.createBooking();

    res.status(201).json(newBooking);
  } catch (error) {
    res.status(error.statusCode).json({ error: error.message });
  }
};

const getFlights = async (req, res) => {
  try {
    const newBooking = await bookingService.getFlights();

  
  const getFlights = async (req, res) => {
    try {
    
      const filteredFlights = await bookingService.getFlights(req)
      
      res.status(201).json(filteredFlights);
    } catch (error) {
        
      res.status(error.statusCode).json({"error":error.message});
    }
  };


module.exports = { createBooking, getFlights };
