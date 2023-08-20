const express = require("express");
const cors = require("cors");
const app = express();
const { logger } = require("./utils/index.js");
const { SUCCESS_MESSAGES, ERROR_MESSAGES } = require("./constants/constants");
const dotenv = require("dotenv");
dotenv.config();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize
  .sync({ force: false })
  .then(() => {
    logger.info(SUCCESS_MESSAGES.DB_SUCCESS_CONNECTION);
  })
  .catch((err) => {
    logger.error(ERROR_MESSAGES.DB_SYNC_ERROR + err.message);
  });

require("./routes/booking.routes.js")(app);

//middleware
require("./middleware/notFound.middleware.js")(app);

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
  logger.info(SUCCESS_MESSAGES.SERVER_START + PORT);
});
