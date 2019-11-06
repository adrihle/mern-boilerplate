//basic dependencies
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const { database } = require('../config/keys')

//functions dependencies
const { queryOneValue } = require('./commons')

//initialize server
const app = express()

app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => {
    console.log('server running on port: ' + app.get('port'))
})

//setup middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//setup mysql connection
const pool = mysql.createPool(database)

//initialize rest api
const queryUploadUser = 'INSERT INTO users set ?'

app.post('/newUser', (req, res) => {
    const { username, pass, userData, userData2 } = req.body
    const newUser = { 
        username, 
        pass, 
        userData: JSON.stringify(userData), 
        userData2: JSON.stringify(userData2) }

    queryOneValue(pool, queryUploadUser, newUser)
    .then(response => {
        res.send(response)
    })

})

