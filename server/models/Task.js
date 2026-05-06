// models/Task.js
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["pending","in-progress","completed"], default: "pending" },
  deadline: Date
});

module.exports = mongoose.model("Task", taskSchema);