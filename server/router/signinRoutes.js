const express = require('express');
const router = express.Router();

// Import the loginUser function using CommonJS syntax
const { loginUser } = require("../controller/signinController.js");

/**
 * @route   POST /api/auth/login
 * @desc    Login user
 * @access  Public
 */
router.post('/login', loginUser);  // Use the imported function for POST /login

module.exports = router;  // Export the router for use in the main server file
