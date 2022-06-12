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
        unique: true

    },
    password: {
        type: String,
        required: true,
        select: false

    },
    CreateDate: {
        type: Date,
        default: Date.now,
    },
    address: {
        street: { type: String },
        homeNum: { type: Number },
        city: { type: String }
    },
    gender:
    {
        type: String,
        enum: ['Male', 'Female']
    },
    lastLog: {
        type: Date,
        default: Date.now,

    },
    // token: {
    //     type: String,
    //     required: true,
    //     select: false
    // },
    isActive: {
        type: Boolean,
        default: true

    }

})

const userModel = mongoose.model('user', userSchema);
module.exports = { userModel }






// const creat = async (data) => {
//     const res = await userModel.create(data)
//     console.log(res);
// }
// creat(user1);


// const read = async (filter) => {
//     const res = await userModel.find(filter)
//     console.log(res);
// }
// read({
//     "address.homeNum": { $gt: 7 }

// });
// // read({}) כדי לקבל את כל המידע

// const update = async (filter, newData) => {
//     const res = await userModel.updateOne(filter, newData)
//     console.log(res);
// }
// update({ email: "Sbag" }, { email: 'Sbag@gmail.com' }
// )

// const del = async (filter, newData) => {
//     const res = await userModel.deleteOne(filter)
//     console.log(res);
// }
// del({ email: 'Rbag@walla.com' }
// )
