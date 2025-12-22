const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

// Add new project (for admin panel later)
router.post("/", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.json({ message: "Project added", project });
  } catch (error) {
    res.status(500).json({ error: "Failed to add project" });
  }
});

module.exports = router;
