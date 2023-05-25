const mongoose = require('mongoose')
const experss = require('express')
const ContactSchema = require('../Schema/ContactSchema')
const Contact = new mongoose.model("Contact",ContactSchema)
const router = experss.Router()


    // post method 
    router.post('/',async(req,res)=>{
        const contactInfo = Contact(req.body);
            try{
                const singleContact = await contactInfo.save()
                res.status(200).json({"result":singleContact})
            }
            catch(error){
                res.status(500).json({"error":error})
            }
    })

    //get method
    router.get('/',async(req,res)=>{
        try{
            const getcontact =await Contact.find({})
            res.status(200).json({"result":getcontact})
        }
        catch(error){
            res.status(500).json({"error":error})
        }
    })

    // Delete method 
router.delete('/:id',async(req,res)=>{
    try{
        const deleteContact = await Contact.findByIdAndDelete(req.params.id);
        res.status(200).json({"result":deleteContact})
    }
    catch(error){
        res.status(500).json({"Error":error})
    }
})


module.exports = router