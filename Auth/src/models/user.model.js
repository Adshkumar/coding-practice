const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email is already taken"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: 6,
  }
});


const User = mongoose.model("User", UserSchema)

module.exports = User