const mongoose = require('mongoose');

const fileObjectSchema = new mongoose.Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  type: { type: String, enum: ['excel', 'pdf'] },
  path: String, 
  url: String, 
  size: Number, 
}, { timestamps: true });

module.exports = mongoose.model('file_objects', fileObjectSchema);