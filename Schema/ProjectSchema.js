const mongoose = require('mongoose')
const ProjectSchema = mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    clientlink:{
        type:String,
        required:true
    },
    serverlink:{
        type:String,
        required:true
    },
    videolink:{
        type:String,
    },
    livesitelink:{
        type:String,
        required:true
    },
    front:{
        type:String,
        required:true
    },
    backend:{
        type:String,
        required:true
    },
    tecnology:{
        type:String,
        required:true
    },
    projectphoto:{
        type:String,
        required:true
    },

})

module.exports = ProjectSchema