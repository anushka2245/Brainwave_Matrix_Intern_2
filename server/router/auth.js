const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const { validateRegister } = authController;

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user
 * @access  Public
 */
router.post('/register', validateRegister, authController.register);



/**
 * @route   GET /api/auth/me
 * @desc    Get current user data
 * @access  Private
 */
// router.get('/me', authController.protect, authController.getMe);

/**
 * @route   POST /api/auth/logout
 * @desc    Logout user (invalidate token)
 * @access  Private
 */
// router.post('/logout', authController.protect, authController.logout);

module.exports = router;