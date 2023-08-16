const { HTTP_STATUS } = require('../constants/constants');

function createBookingError(message, statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

module.exports = createBookingError;