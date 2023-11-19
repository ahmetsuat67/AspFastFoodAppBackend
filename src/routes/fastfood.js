"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/FastFood:

const FastFood = require('../controllers/fastfood')

// URL: /FastFoods

router.route('/')
    .get(FastFood.list)
    .post(FastFood.create)

router.route('/:id')
    .get(FastFood.read)
    .put(FastFood.update)
    .patch(FastFood.update)
    .delete(FastFood.delete)

/* ------------------------------------------------------- */
module.exports = router