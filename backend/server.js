// Environment Import Export Package
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workout");
const userRoutes = require("./routes/user");

// Initiate Express App
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Request listener
    app.listen(process.env.PORT, () => {
      console.log("listening to port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
