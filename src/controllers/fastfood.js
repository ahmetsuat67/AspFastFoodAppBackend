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

        const data = await res.getModelList(FastFood, {}, 'toppings')

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

        const data = await FastFood.findOne({ _id: req.params.id }).populate('toppings')

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
     // Add toppings to FastFood.toppings:
     pushToppings: async (req, res) => {
        /*
            #swagger.tags = ["FastFood"]
            #swagger.summary = "Add Toppings to Pizza"
        */

        const toppings = req.body?.toppings // ObjectId or [ ObjectIds ]

        // const data = await FastFood.findOne({ _id: req.params.id })
        // data.toppings.push(toppings)
        // await data.save()
        const data = await FastFood.updateOne({ _id: req.params.id }, { $push: { toppings: toppings } })
        const newData = await FastFood.findOne({ _id: req.params.id }).populate('toppings')

        res.status(202).send({
            error: false,
            data,
            toppingsCount: newData.toppings.length,
            new: newData
        })
    },

    // Remove toppings from FastFood.toppings:
    pullToppings: async (req, res) => {
        /*
            #swagger.tags = ["FastFood"]
            #swagger.summary = "Remove Toppings from FastFood"
        */

        const toppings = req.body?.toppings // ObjectId

        // const data = await FastFood.findOne({ _id: req.params.id })
        // data.toppings.pull(toppings)
        // await data.save()
        const data = await FastFood.updateOne({ _id: req.params.id }, { $pull: { toppings: toppings } })
        const newData = await FastFood.findOne({ _id: req.params.id }).populate('toppings')

        res.status(202).send({
            error: false,
            data,
            toppingsCount: newData.toppings.length,
            new: newData
        })
    },
}
