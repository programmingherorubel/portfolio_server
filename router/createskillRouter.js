const express = require('express')
const mongoose = require('mongoose')
const createSkillSchema = require('../Schema/createskillSchema')
const CreateSkill = new mongoose.model("CreateSkill",createSkillSchema)
const router = express.Router()

 // post method 
  router.post('/',async(req,res)=>{
    const contactInfo = CreateSkill(req.body);
        try{
            const createSkill = await contactInfo.save()
            res.status(200).json({"result":createSkill})
        }
        catch(error){
            res.status(500).json({"error":error})
        }
})

//get method
router.get('/',async(req,res)=>{
    try{
        const skill =await CreateSkill.find({})
        res.status(200).json({"result":skill})
    }
    catch(error){
        res.status(500).json({"error":error})
    }
})

// Delete method 
router.delete('/:id',async(req,res)=>{
    try{
        const dleeteSkill = await CreateSkill.findByIdAndDelete(req.params.id);
        res.status(200).json({"result":dleeteSkill})
    }
    catch(error){
        res.status(500).json({"Error":error})
    }
})



module.exports = router