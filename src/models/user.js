"use strict"


const { mongoose } = require('../configs/dbConnection')

const passwordEncrypt = require('../helpers/passwordEncrypt')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: [true, "Please provide a username"],
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: [true, "Please provide a password"],
        set: (password) => passwordEncrypt(password) // passwordEncrypt fonksiyonu ile şifrelenmiş passwordu kaydeder
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Please provide a email"],
        unique: [true, "This email is already taken"],
        validate: [(email) => email.includes('@') && email.includes('.'), "Please provide a valid email"]
    },
    isActive: {
        type: Boolean,
        default: true,
    },

    isAdmin: {
        type: Boolean,
        default: false,
    },
}, {
    collection: 'users', // collection ismi
    timestamps: true // createdAt ve updatedAt alanlarını oluşturur
})

module.exports = mongoose.model('User', UserSchema) // User ismiyle UserSchema yı export eder