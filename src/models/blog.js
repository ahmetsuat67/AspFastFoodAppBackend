"use strict"

const { mongoose } = require('../configs/dbConnection')


const BlogSchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true,
        required: true
    },

    content: {
        type: String,
        trim: true,
        required: true
    },

    published: {
        type: Boolean,
        default: true
    },


}, { collection: 'blog', timestamps: true })

module.exports = mongoose.model('Blog', BlogSchema)
