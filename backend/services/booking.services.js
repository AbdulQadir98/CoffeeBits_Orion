const bookingException=require("../exceptions/index.js")

const createBooking = async () => {
    try {
    //   const bookings = {"id":"001"};
    //   return bookings;
    throw bookingException.createBookingError("booking not made")
    } catch (error) {
        throw error
    }
  };

  module.exports={createBooking}