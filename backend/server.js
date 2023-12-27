require("dotenv").config();
const express = require("express");
const workoutRoutes = require("./routes/workout");

// Initiate Express App
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes
app.use("/api/workouts", workoutRoutes);

// Request listener
app.listen(process.env.PORT, () => {
  console.log("listening to port", process.env.PORT);
});
