let express = require('express')
let router = express.Router()

let UserModel = require("../models/user")


router.get("/",async (req,res)=>{
    try {
        users = await UserModel.find({})
        res.json(users)
    } catch (error) {
        console.log(error);
        res.sendStatus(404)
    }
})

router.get("/:id",async (req,res)=>{
    try {
        const user = await UserModel.findById(req.params.id)
        res.json(user)        
    } catch (error) {
        console.log(error);
        res.sendStatus(404)
    }
})

router.post("/",async (req,res)=>{    
    try {
        const newUser = new UserModel(req.body)
        user = await newUser.save()
        res.json(user)
    } catch (error) {
        console.log(error);
        res.sendStatus(409)
    }
   
    
})

router.patch("/:id", async(req,res)=>{
    try {
        const userData = req.body
        const result = await UserModel.updateOne({_id:req.params.id},userData)
        res.json(result.nModified)
    } catch (error) {
        console.log(error);
        res.sendStatus(409)
    }
})


module.exports = router