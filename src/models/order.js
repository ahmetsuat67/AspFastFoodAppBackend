"use strict"


const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
// Order Model:

const OrderSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId, // diğer tabloyla ilişkilendirme yapmak için kullanılır
        ref: 'User', // User modelinden gelecek
        required: true,
    },

    fastfoodId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FastFood',
        required: true,
    },

    size: {
        type: String,
        required: true,
        enum: ['Small', 'Medium', 'Large', 'XLarge']
    },

    quantity: {
        type: Number,
        default: 1,
        required: true,
    },

    price: {
        type: Number,
        default: 0,
        required: true,
    },

    totalPrice: {
        type: Number,
    },

}, {
    collection: 'orders',
    timestamps: true
})

/* ------------------------------------------------------- */
module.exports = mongoose.model('Order', OrderSchema)