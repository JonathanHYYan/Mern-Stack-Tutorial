const express = require("express");
const Workout = require("../models/workoutModel");

// Create an instance of the router
const router = express.Router();

// Get all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "Get all workouts" });
});

// Get single workouts
router.get("/:id", (req, res) => {
  res.json({ mssg: "Get a single workout" });
});

// Post a new workouts
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({title, load, reps});
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

// Delete a workouts
router.delete("/:id", (req, res) => {
  res.json({ mssg: "Delete a workout" });
});

// Update a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a workout" });
});

module.exports = router;
