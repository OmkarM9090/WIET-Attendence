require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");

const Branches = require("./models/branches");
const User = require("./models/users");
const Subject = require("./models/subjects");
const AttendanceSession = require("./models/attend_sessions");
const AuditLogs = require('./models/audit_logs');
const Defaulters = require("./models/defaulters");
const MonthlyLogs = require("./models/monthly_logs");
const FileObjects = require("./models/file_objects");

const app = express();
app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("Connection Error" + error);
  }
};
connectDB();

app.post("/branches", async (req, res) => {
  try {
    const newBranch = await Branches.create(req.body);
    res.status(201).json(newBranch);
  } catch (error) {
    console.log("MY ERROR:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.post("/users", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    console.log("MY ERROR:", error.message);
    res.status(400).json({ error: err.message });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find().populate("branch");
    res.json(users);
  } catch (err) {
    console.log("MY ERROR:", error.message);
    res.status(500).json({ error: err.message });
  }
});

app.post("/subjects", async (req, res) => {
  try {
    const newSubject = await Subject.create(req.body);
    res.status(201).json(newSubject);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/attendance", async (req, res) => {
  try {
    const session = await AttendanceSession.create(req.body);
    res.status(201).json(session);
  } catch (err) {
    console.log("Attendance Error:", err.message);
    res.status(400).json({ error: err.message });
  }
});

app.post("/attendance", async (req, res) => {
  try {
    const data = await AttendanceSession.create(req.body);
    res.status(201).json(data);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.post("/monthly-logs", async (req, res) => {
  try {
    const data = await MonthlyLog.create(req.body);
    res.status(201).json(data);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.post("/defaulters", async (req, res) => {
  try {
    const data = await Defaulter.create(req.body);
    res.status(201).json(data);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.post("/audit-logs", async (req, res) => {
  try {
    const data = await AuditLog.create(req.body);
    res.status(201).json(data);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.post("/files", async (req, res) => {
  try {
    const data = await FileObject.create(req.body);
    res.status(201).json(data);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });
