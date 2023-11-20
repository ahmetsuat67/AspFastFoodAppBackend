"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
/*
    $ mkdir logs
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors
    $ npm i jsonwebtoken morgan
*/
const express = require('express')
const app = express()

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require('dotenv').config()
const PORT = process.env?.PORT || 8000

// asyncErrors to errorHandler:
require('express-async-errors')

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

/* ------------------------------------------------------- */
// Middlewares:
    app.use(express.json()) // gelen json veriyi objeye çevirir req.body ile kullanılır
    app.use
    app.use(require('./src/middlewares/logger')) // loglama işlemi için
    app.use(require('./src/middlewares/findSearchSortPage')) 



/* ------------------------------------------------------- */
// Routes:
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to PIZZA API',
    })
})

// user:
app.use('/users', require('./src/routes/user'))
app.use('/toppings', require('./src/routes/topping'))
app.use('/fastfood', require('./src/routes/fastfood'))
app.use('/order', require('./src/routes/order'))
app.use('/blog', require('./src/routes/blog'))
app.use('/blog', require('./src/routes/auth'))

/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')()