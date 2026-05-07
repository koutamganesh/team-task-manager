const router = require("express").Router();
const auth = require("../middleware/auth");
const Task = require("../models/Task");

// GET TASKS
router.get("/", auth, async (req, res) => {
  try {
    let tasks;

    // Admin sees all tasks
    if (req.user.role === "admin") {
      tasks = await Task.find();
    } 
    // Members also see tasks (for assignment demo)
    else {
      tasks = await Task.find();
    }

    res.json(tasks);

  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// CREATE TASK
router.post("/", auth, async (req, res) => {
  try {
    const task = new Task(req.body);

    await task.save();

    res.json(task);

  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// UPDATE TASK STATUS
router.put("/:id", auth, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).send("Task not found");
    }

    task.status = req.body.status;

    await task.save();

    res.json(task);

  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;