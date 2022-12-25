const express = require("express");
const router = express.Router()

router.post("/", (req, res, next) => {
    req.logOut((err) => {
        if (err) throw err
        res.status(200).send('logged out')
    })
})

module.exports = router