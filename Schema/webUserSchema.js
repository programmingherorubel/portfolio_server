const mongoose = require('mongoose')
const webUserSchema = mongoose.Schema({
    email:{
        type:String
    },
    role:{
        type:String
    }
})

module.exports = webUserSchema