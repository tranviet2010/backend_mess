const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  username:{
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  password:{
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;