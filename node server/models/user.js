const {Schema:mongooseSchema , model} = require("mongoose")

let userSchema = new mongooseSchema({
    username:{type:String , require:true , minlength:3 , maxlength:50},
    age:{type:Number , require:true , min:18,minlength:2,maxlength:3,max:140},
    email:{type:String , require:true,unique:true,validate:/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/}
})

let UserModel = model('user',userSchema)

module.exports = UserModel