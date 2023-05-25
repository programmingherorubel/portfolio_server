const express = require('express')
const mongoose = require('mongoose')
const webUserSchema = require('../Schema/webUserSchema')
const WebUser = mongoose.model("WebUser",webUserSchema)
const router = express.Router()


// post method 
router.put('/user/:email',async(req,res)=>{
        try{
            const email = req.params.email;
            const user = req.body;
            const filter = {email:email}
            const options = {upsert:true}
            const updateDoc = {$set:user}
            const result = await WebUser.updateOne(filter,updateDoc,options)
            res.status(200).json({"result":result})
        }
        catch(error){
            res.status(500).json({"error":error})
        }
})

router.put('/admin',async(req,res)=>{
    try{
        const user = req.body;
        console.log(user)
        const email = user.email;
        const filter = { email : email}
        const updateinfo = {$set:{ role : 'admin' }}
        const result = await WebUser.updateOne(filter,updateinfo)
        res.status(200).json({"result":result})
    }
    catch(error){
        res.status(500).json({"error":error})
    }
})

router.get('/:email',async(req,res)=>{
    try{
        const email = req.params.email;
        const query = {email:email}
        const user = await WebUser.findOne(query)
        let isAdmin = false
            if(user?.role === 'admin'){
                isAdmin = true
            }
            res.status(200).json({"admin":isAdmin})  
        }
    catch(error){
        res.status(500).json({"result":error})
    }
})

//get method
router.get('/',async(req,res)=>{
    try{
        const user =await WebUser.find({})
        res.status(200).json({"result":user})
    }
    catch(error){
        res.status(500).json({"error":error})
    }
})

// Delete method 
router.delete('/:id',async(req,res)=>{
    try{
        const deleteUser = await WebUser.findByIdAndDelete(req.params.id);
        res.status(200).json({"result":deleteUser})
    }
    catch(error){
        res.status(500).json({"Error":error})
    }
})


module.exports = router
