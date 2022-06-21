const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({


    name: {
        type: String,
        required: true
    },

    createDate: {
        type: Date,
        default: Date.now
    },

    price: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true,
        unique: true
    },
    img: {
        type: String,
        // default: "https://m.media-amazon.com/images/I/81Kbu9FfN+L._AC_SL1500_.jpg"
    },
    description: {
        type: String,
        // required: true
    },
    category: [{
        type: String
    }],
    // token: {
    //     type: String,
    //     required: true,
    //     select: false
    // },
    inStock: {
        type: Number,
        required: true,
        default: 0
    },
    permission: {
        type: String,
        enum: ['viewer', 'editor', 'admin'],
        default: 'viewer'
    },
    isActive: {
        type: Boolean,
        default: true
    }

})


const itemModel = mongoose.model('item', itemSchema);
module.exports = { itemModel }
// module.exports.userModel = userModel

