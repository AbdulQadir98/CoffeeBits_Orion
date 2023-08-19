import axios from 'axios';

// TODO : CONSTANTS ?? or Config ??
const API_URL = 'http://localhost:8080/api/v1/booking';

export function getBooking(data) {
  return axios.post(API_URL + "/getFlights",data)
}