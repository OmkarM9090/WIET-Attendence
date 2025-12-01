const mongoose = require('mongoose');

const monthlyLogSchema = new mongoose.Schema({
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'subjects' },
  branch:    { type: mongoose.Schema.Types.ObjectId, ref: 'branches' },
  year: String,
  division: String,
  
  periodStart: Date,
  periodEnd: Date,  
  
  totalSessions: Number,

  studentStats: [{
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    rollNo: Number,
    name: String,
    absentCount: Number,
    presentCount: Number,
    percentPresent: Number
  }],

  generatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('monthly_logs', monthlyLogSchema);