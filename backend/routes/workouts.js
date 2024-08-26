const express = require("express");
const { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout } = require("../controller/workoutController");
const requireAuth = require('../middleware/requireAuth');

// Create an instance of the router
const router = express.Router();

// Require auth for all workout routes
router.use(requireAuth);

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
