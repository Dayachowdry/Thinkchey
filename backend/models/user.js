const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  picture: {
    type: String,
    trim: true
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true
  },
  balance: {
    type: Number,
    default: 1000 // Starting balance for new users
  },
  markets: [{
    marketId: {
      type: String,
      required: true
    },
    position: {
      type: String,
      enum: ['yes', 'no'],
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    buyPrice: {
      type: Number,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date,
    default: Date.now
  }
});

// Add indexes for better query performance
userSchema.index({ email: 1 });
userSchema.index({ googleId: 1 });

module.exports = mongoose.model('User', userSchema);
