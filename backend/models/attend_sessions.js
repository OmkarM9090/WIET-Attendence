const mongoose = require("mongoose");

const attendanceSessionSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },

    sessionType: {
      type: String,
      enum: ["Lecture", "Lab"],
      default: "Lecture",
    },

    subjectId: { type: mongoose.Schema.Types.ObjectId, ref: "subjects", required: true, },
    teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true, },
    branch: { type: mongoose.Schema.Types.ObjectId, ref: "branches", required: true, },

    year: { type: String, required: true },
    division: { type: String, required: true },

    totalStudents: { type: Number, required: true },

    absent: [{
        studentId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
        rollNo: Number,
        name: String,
        reason: String,
        excused: { type: Boolean, default: false }
      }]
  }, { timestamps: true });

attendanceSessionSchema.index({ branch: 1, year: 1, division: 1, subjectId: 1, date: 1, });
attendanceSessionSchema.index({ teacherId: 1, date: 1 });

module.exports = mongoose.model("attendance_sessions", attendanceSessionSchema);
