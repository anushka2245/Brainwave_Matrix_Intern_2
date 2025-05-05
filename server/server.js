require('dotenv').config();

const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const authRoutes = require('./router/auth.js'); 
const signRoutes = require('./router/signinRoutes.js');

const app = express();

// Middleware to parse JSON
app.use(express.json());

//cors  setup  to allow to request from the frontend(port is 3000)
const corsOpention = {
  origin : 'http://localhost:3000',
  methods:'GET,POST,PUT,DELETE',
  allowedHeaders:'content-Type,Authorization',
  creditials:true,

};
app.use(cors(corsOpention));

// Connect to MongoDB
const port = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));

// Use the auth routes
app.use('/api/auth', authRoutes);
app.use('/api/auth/login',signRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
