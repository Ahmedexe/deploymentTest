// models/userSchema.js
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create and export the User model
const User = mongoose.model('User', userSchema);

module.exports = User;  // Exporting the model