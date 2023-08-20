import axios from 'axios';

// TODO : CONSTANTS ?? or Config ??
const API_URL = 'http://localhost:8080/api/v1';

export function placeBooking(data) {
  return axios.post(API_URL + "/booking",data)
}

export function getFlights(data) {
  return axios.post(API_URL + "/getFlights",data)
}