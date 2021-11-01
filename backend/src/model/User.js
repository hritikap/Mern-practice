const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: [true, 'User already exixts'],
      match: [/^[^\s@]+@[^\s@.]+\.[^\s@.]+$/, 'Not an valid email'],
    },
    password: {
      type: String,
      required: [true, 'password is required'],
    },
  },
  { timestamps: true },
);

const User = model('User', userSchema);
module.exports = User;
