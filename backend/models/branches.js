const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true
  },
  departments: [String],

}, { timestamps: true });

module.exports = mongoose.model('branches', branchSchema);