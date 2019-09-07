const express = require('express')
const parser = require('body-parser')
const app = express()
const cors = require('cors')
const gladiatorsController = require('./controllers/gladiators.js')
const userController = require('./controllers/users.js')
app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
app.use(cors())
    // app.get("/", (req, res) => {
    //     res.send("Welcome")
    // })
app.use('/api/user', userController)
app.use('/api/gladiators', gladiatorsController)

// app.get('/api', function(req, res) {
//     res.redirect('/api/gladiators')
// })
app.get('/', function(req, res) {
    res.redirect('/api/gladiators')
})
app.set("port", process.env.PORT || 8080);
// app.set("port", process.env.PORT);

app.listen(app.get("port"), () => {
    console.log(`${app.get("port")} works`);
});