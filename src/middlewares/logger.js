"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// $ npm i morgan
// app.use(logger):

const morgan = require('morgan') // logging yapan bir modül
const fs = require('node:fs')

const now = new Date() // tarih oluşturduk
const today = now.toISOString().split('T')[0] // tarihi stringe çevirdik ve T den itibaren olan kısmı ayırdık
 
module.exports = morgan('combined', {
    stream: fs.createWriteStream(`./logs/${today}.log`, { flags: 'a+' }) // log dosyası oluşturduk
})