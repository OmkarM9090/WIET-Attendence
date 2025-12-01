const mongoose = require('mongoose');

const defaulterSchema = new mongoose.Schema({
  name: String,
  periodStart: Date,
  periodEnd: Date,
  thresholdPercent: Number,
  
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'subjects' },
  branch: { type: mongoose.Schema.Types.ObjectId, ref: 'branches' },
  year: String,
  division: String,

  list: [{
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    rollNo: Number,
    name: String,
    percentPresent: Number
  }],

  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
}, { timestamps: true });

module.exports = mongoose.model('defaulters', defaulterSchema);