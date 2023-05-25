const mongoose = require('mongoose')
const createSkillSchema = mongoose.Schema({

    skillname:{
        type:String,
        required:true
    },
    skillphoto:{
        type:String,
        required:true
    }

})

module.exports = createSkillSchema