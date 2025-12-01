const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({
  action: { type: String, required: true }, // e.g. "DELETE_ATTENDANCE"
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }, 
  targetId: { type: mongoose.Schema.Types.ObjectId }, 
  details: mongoose.Schema.Types.Mixed, 
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('audit_logs', auditLogSchema);