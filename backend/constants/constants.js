const constants = {
    // Common HTTP status codes
    HTTP_STATUS: {
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      FORBIDDEN: 403,
      NOT_FOUND: 404,
      INTERNAL_SERVER_ERROR: 500,
    },
  
    // Error messages
    ERROR_MESSAGES: {
      BAD_REQUEST: 'Bad request',
      UNAUTHORIZED: 'Unauthorized',
      FORBIDDEN: 'Forbidden',
      NOT_FOUND: 'Not found',
      INTERNAL_SERVER_ERROR: 'Internal server error',
    },
  
    // Custom success messages
    SUCCESS_MESSAGES: {
      RESOURCE_CREATED: 'Resource created successfully',
      OPERATION_SUCCESSFUL: 'Operation completed successfully',
    },
  
    // Validation error messages
    VALIDATION_MESSAGES: {
      REQUIRED_FIELD: 'This field is required',
      INVALID_EMAIL: 'Invalid email format'
    },
  };
  
  module.exports = constants;