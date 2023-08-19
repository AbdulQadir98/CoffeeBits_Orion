const { HTTP_STATUS, ERROR_MESSAGES } = require("../constants/constants");
const someException = require("../exceptions/index.js");

const notFound = (req, res) => {
  const err = someException.createBookingError(
    `${ERROR_MESSAGES.NOT_FOUND} - ${req.originalUrl}`,
    HTTP_STATUS.NOT_FOUND
  );
  res.status(err.statusCode).json({ error: err.message });
};

module.exports = (app) => {
  app.use(notFound);
};
