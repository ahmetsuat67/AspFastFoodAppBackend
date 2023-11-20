"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/FastFood:
const permissions = require('../middlewares/permissions')
const Blog = require('../controllers/blog')

// URL: /Blogs
router.use(permissions.isAdmin)

router.route('/')
    .get(Blog.list)
    .post(Blog.create)

router.route('/:id')
    .get(Blog.read)
    .put(Blog.update)
    .patch(Blog.update)
    .delete(Blog.delete)

/* ------------------------------------------------------- */
module.exports = router