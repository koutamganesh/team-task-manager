const router = require("express").Router();
const auth = require("../middleware/auth");
const Project = require("../models/Project");
const User = require("../models/User");

// CREATE PROJECT (ADMIN)
router.post("/", auth, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).send("Forbidden");

  const project = new Project({
    title: req.body.title,
    description: req.body.description,
    members: [],
    createdBy: req.user.id
  });

  await project.save();
  res.json(project);
});

// GET ALL PROJECTS
router.get("/", auth, async (req, res) => {
  const projects = await Project.find()
    .populate("members", "name email");

  res.json(projects);
});

// ADD MEMBER
router.put("/:id/add-member", auth, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).send("Forbidden");

  const project = await Project.findById(req.params.id);

  if (!project) return res.status(404).send("Project not found");

  if (!project.members.includes(req.body.userId)) {
    project.members.push(req.body.userId);
  }

  await project.save();
  res.json(project);
});

// REMOVE MEMBER
router.put("/:id/remove-member", auth, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).send("Forbidden");

  const project = await Project.findById(req.params.id);

  project.members = project.members.filter(
    (m) => m.toString() !== req.body.userId
  );

  await project.save();
  res.json(project);
});

module.exports = router;