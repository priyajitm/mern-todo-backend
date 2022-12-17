const express = require("express");
const Task = require("../models/Task");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { id, title, completed } = req.body;

    const task = await Task.findOneAndUpdate(
      { taskid: id },
      { title: title, completed: completed }
    );

    if (task) {
      res.status(200).send({ message: "Task updated successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
