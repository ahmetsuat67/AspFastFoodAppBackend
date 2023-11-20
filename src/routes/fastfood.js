"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/FastFood:
const permissions = require('../middlewares/permissions')
const FastFood = require('../controllers/fastfood')

// URL: /FastFoods
router.route('/')
    .get(FastFood.list)
    .post(permissions.isAdmin, FastFood.create)

router.route('/:id')
    .get(FastFood.read)
    .put(permissions.isAdmin, FastFood.update)
    .patch(permissions.isAdmin, FastFood.update)
    .delete(permissions.isAdmin, FastFood.delete)

router.put('/:id/pushToppings', permissions.isAdmin, FastFood.pushToppings)
router.put('/:id/pullToppings', permissions.isAdmin, FastFood.pullToppings)


/* ------------------------------------------------------- */
module.exports = router