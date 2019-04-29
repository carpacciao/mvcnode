'use strict'
// User Model

const mongoose = require('mongoose')

const Schema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      match: /^[a-zA-Z0-9-_]+$/
    },
    password: {
      type: String
    },
    email: {
      type: String,
      unique: true,
      match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
)

const User = mongoose.model('User', Schema)

module.exports = User