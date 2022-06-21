require('../db').connect()

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    phone: {
        type: Number
    },
    createDate: {
        type: Date, default: Date.now
    },
    lastLog: {
        type: Date, default: Date.now
    },
    isActive: {
        type: Boolean, default: true
    },
    address: {
        street: { type: String },
        homeNumber: { type: Number },
        city: { type: String },
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        // required: true
    },
    token: {
        type: String,
        // required: true,
        select: false
    },



})
const userModel = mongoose.model('user', userSchema);

module.exports = { userModel }