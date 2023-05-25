const mongoose = require('mongoose')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
// router -----------------------
const contactRouter = require('./router/contactRouter')
const createskillRouter = require('./router/createskillRouter')
const createServiceRouter = require('./router/createServiceRouter')
const createProjectRouter = require('./router/createProjectRouter')
const webUserRouter = require('./router/webUserRouter')
//-------------------------------
const app = express()
      app.use(cors())
      dotenv.config()
      app.use(express.json())
//------------------------------
const port = process.env.PORT || 5000


// Connection ---------------------
mongoose.connect(process.env.MONGODB_ACCESS,
    {useNewUrlParser:true},
    {useUnifiedTopology: true }
    )
    .then(()=> console.log('connection successfull'))
    .catch(err => console.log(err))

// Router 
app.use('/contact',contactRouter)
app.use('/createskill',createskillRouter)
app.use('/createservice',createServiceRouter)
app.use('/createproject',createProjectRouter)
app.use('/webuser',webUserRouter)


// Error Handeler 
function ErrorHandeler (err,req,res,next){
    if(res.headersSent){
        return err
    }
    res.status(500).json({ error:err })
}


app.get('/',async(req,res)=>{
    res.send('hello world')
})

app.listen(port,()=>{
    console.log('app lisining port number 5000')
})