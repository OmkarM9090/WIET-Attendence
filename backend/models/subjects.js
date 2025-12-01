const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true }, 
  semester: { type: Number, required: true },
  branch: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'branches', 
    required: true 
  },
}, { timestamps: true });

module.exports = mongoose.model('subjects', subjectSchema);