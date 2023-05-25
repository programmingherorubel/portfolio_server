const mongoose = require('mongoose')
const ServiceSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    servicephoto:{
        type:String,
        required:true
    }
})

module.exports = ServiceSchema