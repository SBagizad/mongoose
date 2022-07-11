// מטרת קובץ זה:
//   atlas או שרת מרוחק mongo התחברות לשרת מקומי 

// import mongoose from 'mongoose'
const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://SBagizad:Sb10203040@cluster0.mjpur.mongodb.net/test2?retryWrites=true&w=majority'

exports.connect = async () => {
    try {
        await mongoose.connect(MONGO_URL, { useNewUrlParser: true },
            (err) => {
                if (err) { throw err }

                //  if(err) {console.log("error!", err); return false; }
                console.log("Connection Successful, State: ", mongoose.connection.readyState)
            })
    } catch (error) {
        console.log('error mongoose: ', error)

    }

}


