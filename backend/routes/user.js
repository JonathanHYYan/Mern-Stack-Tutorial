const express = require("express");

// User Controller Functions
const { loginUser, signupUser } = require("../controller/userController");

const router = express.Router();

// Login Route
router.post("/login", loginUser);

// Signup Route
router.post("/signup", signupUser);

module.exports = router;

// Use NNMS-X to initiate UNIT Testing
