"use strict"

// Fast Food Controller:

const FastFood = require('../models/fastfood')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["FastFood"]
            #swagger.summary = "List FastFood"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

        const data = await res.getModelList(FastFood)

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(FastFood),
            data
        })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["FastFood"]
            #swagger.summary = "Create FastFood"
        */

        const data = await FastFood.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["FastFood"]
            #swagger.summary = "Get Single FastFood"
        */

        const data = await FastFood.findOne({ _id: req.params.id })

        res.status(200).send({
            error: false,
            data
        })

    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["FastFood"]
            #swagger.summary = "Update FastFood"
        */

        const data = await FastFood.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await FastFood.findOne({ _id: req.params.id })
        })

    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["FastFood"]
            #swagger.summary = "Delete FastFood"
        */

        const data = await FastFood.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })

    },
}