"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/FastFood:

const Blog = require('../controllers/blog')

// URL: /Blogs

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