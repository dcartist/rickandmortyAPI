const mongoose = require('../db/connection')

const ResultSchema = new mongoose.Schema({
    
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
            gamesplayed: {
                type: Number,
                default: 200
            },
            gameswon: {
                type: Number,
                default: 200
            } 
      

})

const Gladiator = new mongoose.Schema({
    results:[ResultSchema]
})

let gladiator = mongoose.model('Gladiator', Gladiator)
module.exports = gladiator
