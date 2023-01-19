const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
      name: {
            type: String,
            required: true
      },
      username: {
            type: String,
            min: 4,
            max: 20,
            required: true
      },
      image: {
            type: String,
      },
      email: {
            type: String,
            unique: true,
            required: true
      },
      role: {
            type: String,
            default: 'admin'
      },
      password: {
            type: String,
            max: 30,
            min: 6,
            required: true
      },
      status: {
            type: Boolean,
            default: true
      }

}, { timestamps: true })

module.exports = mongoose.model('Users', usersSchema);