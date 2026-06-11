const express = require("express");
const cors = require("cors");

const app = express();

const ticketRoutes =
require("./routes/ticketRoutes");

const feedbackRoutes =
require("./routes/feedbackRoutes");

const authRoutes =
require("./routes/authRoutes");

// MIDDLEWARE
app.use(cors());

app.use(express.json());


// ROUTES
app.use(
  "/api/tickets",
  ticketRoutes
);

app.use(
  "/api/feedback",
  feedbackRoutes
);

app.use(
  "/api/auth",
  authRoutes
);

// SERVER
app.listen(5000, () => {

  console.log(
    "Server running on port 5000"
  );

});