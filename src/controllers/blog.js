"use strict"

// Blog Controller:

const Blog = require('../models/blog')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Blog"]
            #swagger.summary = "List Blog"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

        const data = await res.getModelList(Blog)

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Blog),
            data
        })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Blog"]
            #swagger.summary = "Create Blog"
        */

        const data = await Blog.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Blog"]
            #swagger.summary = "Get Single Blog"
        */

        const data = await Blog.findOne({ _id: req.params.id })

        res.status(200).send({
            error: false,
            data
        })

    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Blog"]
            #swagger.summary = "Update Blog"
        */

        const data = await Blog.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await Blog.findOne({ _id: req.params.id })
        })

    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Blog"]
            #swagger.summary = "Delete Blog"
        */

        const data = await Blog.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })

    },
}