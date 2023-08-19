const express = require("express");
const cors = require("cors");
const app = express();
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
  .sync()
  .then(() => {
    console.log("Connected with database...");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

require("./routes/booking.routes.js")(app);

//middleware
require("./middleware/notFound.middleware.js")(app);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
