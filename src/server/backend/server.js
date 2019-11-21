//basic dependencies
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const { database, cloudinary } = require('../config/keys')
const cloudinaryApp = require('cloudinary')
const formData = require('express-form-data')

//functions dependencies
const { queryOneInputValue, loginData } = require('../fns')

//importing queries strings
const { queryUploadUser, querySignIn, queryCheckEmail } = require('../queries')

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
app.post('/newUser', (req, res) => {
    const { email, pass, username, url } = req.body
    const upload = { 
        email, 
        pass,
        userData: JSON.stringify({username, url}),
        billData: JSON.stringify({}),
        tourData: JSON.stringify({}),
        scoreData: JSON.stringify({}),
        socialData: JSON.stringify({})
    }

    queryOneInputValue(pool, queryUploadUser, upload)
    .then(response => {
        res.send(response)
    })

})

//initialize rest api for sign in user
app.post('/login', (req, res) => {
    const { email, pass } = req.body

    queryOneInputValue(pool, querySignIn, email)
    .then( e => {
        if (!e[0]){
            let e1 = { type: 'INCORRECT_USERNAME'}
            res.send(e1)
        }else {
            if (e[0].pass !== pass){
                e[0].type = 'INCORRECT_PASSWORD'
            }else {
                e[0].type = 'SIGN_IN_SUCCESS'
            }
            res.send(loginData(e[0]))
        }
    })
})

//initialize rest api for upload image to cloudinary
cloudinaryApp.config(cloudinary)

app.use(formData.parse())

app.post('/newUserImage', (req, res) => {
    cloudinaryApp.uploader.upload(req.files[0].path)
      .then((image) => {
          res.send(image.url)
      }) 
})

//sample
app.post('/checkEmails', (req, res) => {
    const { email } = req.body
    queryOneInputValue(pool, queryCheckEmail, email)
    .then(async e => {
        if (e[0]) return true
        else return false
    }).then (e => res.send(e))
})

