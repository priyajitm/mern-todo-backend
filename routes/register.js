const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const e = require("express");

router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      const hashedPass = await bcrypt.hash(password, 10);

      const userData = new User({
        name: name,
        email: email,
        password: hashedPass,
      });

      await userData.save();

      res.status(201).send({ msg: "User Added Successfully" });
    } else {
      res.status(409).send({ msg: "User Already Exists" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
