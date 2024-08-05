const express = require("express");
const { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout } = require("../controller/workoutController");

// Create an instance of the router
const router = express.Router();

// Get all workouts
router.get("/", getWorkouts);

// Get single workouts
router.get("/:id", getWorkout);

// Post a new workouts
router.post("/", createWorkout);

// Delete a workouts
router.delete("/:id", deleteWorkout);

// Update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
