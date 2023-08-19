import axios from 'axios';

// CONSTANTS ?? or Config ??
const API_URL = 'http://localhost:8080/api/v1/booking';

class BookingService {

  //POST
  getBooking(data) {
    return axios.post(API_URL + "/getFlights",data)
  }
}

export default new BookingService();