const jwt = require('jsonwebtoken');
const User = require('../models/User');
const AppError = require('../utils/appError');

// Utility function to extract token from headers
const getTokenFromHeader = (req) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    return req.headers.authorization.split(' ')[1];
  }
  return null;
};

// Main JWT verification middleware
const verifyJWT = async (req, res, next) => {
  try {
    // 1. Get token from header
    const token = getTokenFromHeader(req);
    
    if (!token) {
      return next(new AppError('You are not logged in! Please log in to get access', 401));
    }

    // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return next(new AppError('The user belonging to this token no longer exists', 401));
    }

    // 4. Check if user changed password after token was issued
    if (currentUser.changedPasswordAfter(decoded.iat)) {
      return next(new AppError('User recently changed password! Please log in again', 401));
    }

    // 5. Grant access to protected route
    req.user = currentUser;
    next();
  } catch (err) {
    // Handle different JWT errors specifically
    if (err.name === 'JsonWebTokenError') {
      return next(new AppError('Invalid token. Please log in again!', 401));
    }
    if (err.name === 'TokenExpiredError') {
      return next(new AppError('Your token has expired! Please log in again', 401));
    }
    return next(err);
  }
};

// Role-based authorization middleware
const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action', 403)
      );
    }
    next();
  };
};

module.exports = {
  verifyJWT,
  restrictTo
};