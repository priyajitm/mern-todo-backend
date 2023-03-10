const express = require("express");
const Task = require("../models/Task");
const router = express.Router();

router.post("/:id", async (req, res) => {
  try {
    const id = req.params.id

    const task = await Task.findOneAndDelete({'taskid' : id})

    if (task) {
      res.status(200).send({message: "Task deleted successfully"})
    }

  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
