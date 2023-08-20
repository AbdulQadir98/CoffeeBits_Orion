import axios from 'axios';

// TODO : const API_URL = process.env.API_URL;
const API_URL = 'http://localhost:8080/api/v1/booking';

export function placeBooking(data) {
  return axios.post(API_URL + "/",data)
}

export function getFlights(data) {
  return axios.post(API_URL + "/getFlights",data)
}
