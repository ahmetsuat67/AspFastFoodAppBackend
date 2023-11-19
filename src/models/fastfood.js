"use strict"

const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
// FastFood Model:

const FastFoodSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },

    image: {
        type: String,
        trim: true,
    },

    price: {
        type: Number,
        required: true,
    },

    toppings: [ // burada array olarak tanımladık çünkü birden fazla topping olabilir. buradaki toppingler topping modelinden gelecek
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Topping'
        }
    ],
    cal: {
        type: Number,
        required: true,
    },


}, {
    collection: 'fastfood',
    timestamps: true
})

/* ------------------------------------------------------- */
module.exports = mongoose.model('FastFood', FastFoodSchema)