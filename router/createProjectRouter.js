const mongoose = require('mongoose')
const express = require('express')
const ProjectSchema = require('../Schema/ProjectSchema')
const Project =new mongoose.model('Project',ProjectSchema)
const router = express.Router()

// post method 
router.post('/',async(req,res)=>{
    const projectInfo = Project(req.body);
        try{
            const singleProject = await projectInfo.save()
            res.status(200).json({"result":singleProject})
        }
        catch(error){
            res.status(500).json({"error":error})
        }
})

//get method
router.get('/',async(req,res)=>{
    try{
        const allProject =await Project.find({})
        res.status(200).json({"result":allProject})
    }
    catch(error){
        res.status(500).json({"error":error})
    }
})

// Delete method 
router.delete('/:id',async(req,res)=>{
    try{
        const deleteProject = await Project.findByIdAndDelete(req.params.id);
        res.status(200).json({"result":deleteProject})
    }
    catch(error){
        res.status(500).json({"Error":error})
    }
})




module.exports = router