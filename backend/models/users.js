const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["student", "teacher", "admin"],
      required: true,
    },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    phone: { type: String },

    year: { type: String },
    division: { type: String },
    rollNo: { type: Number },

    branch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "branches",
      required: true,
    },

    assignedSubjects: [
      {
        subjectId: { type: mongoose.Schema.Types.ObjectId, ref: "subjects" },
        year: String,
        division: String,
      },
    ],
  },
  { timestamps: true }
);

userSchema.index({ branch: 1, year: 1, division: 1, rollNo: 1 }, { unique: true, partialFilterExpression: { role: 'student' } });

module.exports = mongoose.model("users", userSchema);