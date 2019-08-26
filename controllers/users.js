const express = require("express");
const router = express.Router();
const User = require('../models/User.js')

router.get("/", (req, res) => {
    User.find().then(user => {
        res.json(user)
    })
})

router.get("/name/:name", (req, res) => {
    let theName = req.params.name
    User.find({ 'results.name': theName }).then(showName => res.json(showName))
})
// router.get("/name/:conLastName", (req, res) => {
//     let theName = req.params.conLastName
//     User.find({ conLastName: theName }).then(showName => res.json(showName))
// })
router.get("/id/:id", (req, res) => {
    let theName = req.params.conLastName
    User.find({ ' results._id': req.params.id }).then(showName => res.json(showName))
})

router.post("/new", (req, res) => {
    User.create(req.body).then(user => res.json(user))
})

router.put("/update/:id", (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(update => res.json(update))
})

router.delete("/delete/:id", (req, res) => {
    User.findOneAndDelete({ _id: req.params.id }).then(deleted => res.json(deleted))
})

module.exports = router