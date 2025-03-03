const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // ✅ Passwords are now hashed
});

module.exports = mongoose.model("User", userSchema);
