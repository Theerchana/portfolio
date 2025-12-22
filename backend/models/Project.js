const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    tech: [String],
    imageUrl: String,
    liveUrl: String,
    repoUrl: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
