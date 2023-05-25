const express = require('express')
const mongoose = require('mongoose')
const ServiceSchema = require('../Schema/ServiceSchema')
const Service = new mongoose.model("Service",ServiceSchema)
const router = express.Router()

// post method 
router.post('/',async(req,res)=>{
    const serviceInfo = Service(req.body);
        try{
            const singleService = await serviceInfo.save()
            res.status(200).json({"result":singleService})
        }
        catch(error){
            res.status(500).json({"error":error})
        }
})

//get method
router.get('/',async(req,res)=>{
    try{
        const allService =await Service.find({})
        res.status(200).json({"result":allService})
    }
    catch(error){
        res.status(500).json({"error":error})
    }
})

// Delete method 
router.delete('/:id',async(req,res)=>{
    try{
        const deleteService = await Service.findByIdAndDelete(req.params.id);
        res.status(200).json({"result":deleteService})
    }
    catch(error){
        res.status(500).json({"Error":error})
    }
})




module.exports = router
