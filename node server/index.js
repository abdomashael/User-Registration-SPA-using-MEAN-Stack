const express = require('express')
const mongooose = require('mongoose')

const bodyParser = require('body-parser')
const cors = require('cors')
const UserRouter = require("./routes/user") 

const PORT = 3000

let app = express()

mongooose.connect("mongodb://localhost:27017/test",{useNewUrlParser:true , useUnifiedTopology:true})
.then(()=> console.log("db is Conncted"))
.catch(err=>console.log(err))

app.use(cors())

app.use(bodyParser.json())

app.use((req,res,next)=>{
    console.log(`${new Date} ----- ${req.method} request ----- ${req.url}`);
    next()
})

app.use('/user',UserRouter)

app.listen(PORT,(err) => {
    if (!err) {
        console.log(`on port ${PORT}`);        
    }
})