const express = require("express");
const router = express.Router();
const Gladiator = require('../models/Gladiator.js')

router.get("/", (req, res) => {
    Gladiator.find().then(contractor => {
        res.json(contractor)
    })
})
router.get("/species/:info", (req, res) => {
    let theName = req.params.info
    Gladiator.find({ 'results.species': theName }).then(showName => res.json(showName))
})
router.get("/name/:name", (req, res) => {
    let theName = req.params.name
    Gladiator.find({ 'results.name': theName }).then(showName => res.json(showName))
})
router.get("/status/:status", (req, res) => {
    let theName = req.params.status
    Gladiator.find({ 'results.status': theName }).then(showName => res.json(showName))
})
router.get("/score/:score", (req, res) => {
    let theName = req.params.score
    Gladiator.find({ 'results.score': theName }).then(showName => res.json(showName))
})
router.get("/gid/:_id", (req, res) => {
    let theName = req.params._id
    Gladiator.find({ 'results._id': theName }).then(showName => res.json(showName))
})
router.get("/gender/:gender", (req, res) => {
    let theName = req.params.gender
    Gladiator.find({ 'results.gender': theName }).then(showName => res.json(showName))
})



module.exports = router