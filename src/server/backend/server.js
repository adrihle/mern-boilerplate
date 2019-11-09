//basic dependencies
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const { database } = require('../config/keys')
const axios = require('axios')

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

//initialize rest api for upload user
const queryUploadUser = 'INSERT INTO users set ?'

app.post('/newUser', (req, res) => {
    const { email, pass } = req.body
    const upload = { email, pass}

    queryOneValue(pool, queryUploadUser, upload)
    .then(response => {
        res.send(response)
    })

})

//initialize rest api for sign in user
const querySignIn = 'SELECT pass FROM users WHERE email = ?'

app.post('/login', (req, res) => {
    const { email, pass } = req.body

    queryOneValue(pool, querySignIn, email)
    .then( e => {
        if (!e[0]){
            res.send('INCORRECT_USERNAME')
        }else {
            if (e[0].pass !== pass){
                res.send('INCORRECT_PASSWORD')
            }else {
                res.send('SIGN_IN_SUCCESS')
            }
        }
    })
})

const query = 'SELECT * FROM users'

app.get('/data:id', (req, res) => {
    const id = req.params
    pool.query(query, (err, rows) => {
        res.send(id)
    })
})

