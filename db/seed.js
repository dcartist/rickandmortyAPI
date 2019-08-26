const Gladiator = require('../models/Gladiator.js')
const User = require('../models/User')
// const Contractor = require('../models/Contractor.js')
// const Owner = require('../models/Owner.js')
const characters = require('./rickandmortycharacters.json')
const usernames = require('./user.json')


function createdb() {
    Gladiator.insertMany(characters).then(gladiator => {
        console.log('gladiator db completed');
        User.insertMany(usernames).then( used => {
            console.log('user db completed')
        }) 
        // });
    }).catch(err => { console.log(err) })
    // Property.insertMany(characters).then(prop => {
    //         console.log('property')
    //     })
    //     .then(
    //         Owner.insertMany(characters).then(own => {
    //             console.log('owner');
    //         })
    //     ).then( //End of the inserting

    //     )
    //     .catch(err => { console.log(err) })

}

function dbRun() {
    //begin of function


    Gladiator.deleteMany({})
    .then(User.deleteMany({}).then(
        deleted => {
            console.log('Deleted db')
            createdb()
        }
    )
        
    )
/* 
    Property.deleteMany({}).then(
        Contractor.deleteMany({}).then(
            Owner.deleteMany({}).then(
                deleted => {
                    console.log("deleted DB & Adding info")
                    createdb()
                }
            )
        ) //finish deleting the database
    ).then() */

    //end of function
}

dbRun()