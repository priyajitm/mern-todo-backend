const express = require("express");
const Task = require("../models/Task");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { id, title, completed } = req.body;

    const taskData = new Task({
      taskid: id,
      title: title,
      completed: completed,
    });

    await taskData.save();
    res.status(201).send({ msg: "Task Added Successfully" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
