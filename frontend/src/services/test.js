import axios from 'axios';

// CONSTANTS ?? or Config ??
const API_URL = 'http://localhost:8080/api/test/';

class UserService {

  //POST
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }
}

export default new UserService();