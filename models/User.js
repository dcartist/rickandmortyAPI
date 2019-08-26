const mongoose = require('../db/connection')

const resultsSchema = new mongoose.Schema({
    id: Number,
    name: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        trim: true
    },
    species: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        trim: true
    },
    origin: {
        name: String,
        url: String
    },
    location: {
        name: String,
        url: String
    },
    image: {
        type: String
    },
    score: {
        type: Number,
        default: 7000
    },
    gamesplayed: Number,
    gameswon: Number,
    gameslost: Number

})

const User = new mongoose.Schema ({
    results:[resultsSchema]
})
let user = mongoose.model('User', User)
module.exports = user
