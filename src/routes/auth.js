"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/auth:

const auth = require('../controllers/auth')

// URL: /auth

router.post('/login', auth.login) // login işlemi için
router.post('/refresh', auth.refresh) // sayfa yenilendiğinde token yenilemek için
router.get('/logout', auth.logout) // get isteği swagger yakalaması için

/* ------------------------------------------------------- */
module.exports = router