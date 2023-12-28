const express = require("express");

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
router.post("/", (req, res) => {
  res.json({ mssg: "Post a new workout" });
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
