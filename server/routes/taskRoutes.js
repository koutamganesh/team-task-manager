const router = require("express").Router();
const auth = require("../middleware/auth");
const Task = require("../models/Task");

// GET TASKS
router.get("/", auth, async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// CREATE TASK
router.post("/", auth, async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
});

// UPDATE TASK
router.put("/:id", auth, async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).send("Not found");

  task.status = req.body.status;
  await task.save();

  res.json(task);
});

module.exports = router;