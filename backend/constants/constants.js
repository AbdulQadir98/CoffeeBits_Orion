const constants = {
  // Common HTTP status codes
  HTTP_STATUS: {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
  },

  // Error messages
  ERROR_MESSAGES: {
    BAD_REQUEST: "Bad request",
    UNAUTHORIZED: "Unauthorized",
    FORBIDDEN: "Forbidden",
    NOT_FOUND: "Not found",
    INTERNAL_SERVER_ERROR: "Internal server error",
    DB_SYNC_ERROR: "Failed to sync db: ",
  },

  // Custom success messages
  SUCCESS_MESSAGES: {
    BOOKING_CREATED: "Booking created successfully ",
    OPERATION_SUCCESSFUL: "Operation completed successfully",
    SERVER_START: "Server is running on port ",
    DB_SUCCESS_CONNECTION: "Connected with database...",
  },

  // Validation error messages
  VALIDATION_MESSAGES: {
    REQUIRED_FIELD: "This field is required",
    INVALID_EMAIL: "Invalid email format",
  },

  //Required fields for search flights
  REQUIRED_FIELDS: {
    FLIGHT_SCHEDULE_SEARCH: [
      "startingLocation",
      "endingLocation",
      "departureDate",
    ],
  },
};

module.exports = constants;
