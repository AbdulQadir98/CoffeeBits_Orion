const authService = require('../services/auth.services');
const constants = require('../constants/constants');
const logger = require('./logger.utils');

const handleLogin = async (res) => {
    try {
        const newUser = await authService.login();

        if (!newUser) {
            logger.warn("Unauthorized login attempt");
            res.status(constants.HTTP_STATUS.UNAUTHORIZED)
                .json({ "error": constants.ERROR_MESSAGES.UNAUTHORIZED });
        } else {
            logger.info(`User ${newUser.username} logged in`);
            res.status(constants.HTTP_STATUS.OK)
                .json(newUser);
        }
    } catch (error) {
        handleLoginError(error, res);
    }
};

const handleLoginError = (error, res) => {
    logger.error("Error during login:", error);

    let statusCode = constants.HTTP_STATUS.INTERNAL_SERVER_ERROR;
    if (error.name === "UnauthorizedError") {
        statusCode = constants.HTTP_STATUS.UNAUTHORIZED;
    } else if (error.name === "InternalServerError") {
        statusCode = constants.HTTP_STATUS.INTERNAL_SERVER_ERROR;
    }

    logger.error(`Sending error response with status ${statusCode}: ${error.message}`);
    res.status(statusCode).json({ "error": error.message });
};

module.exports = {
    handleLogin,
    handleLoginError
};