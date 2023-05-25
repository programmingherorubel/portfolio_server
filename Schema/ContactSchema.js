const mongoose = require('mongoose')
const ContactSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    }
})


module.exports = ContactSchema
