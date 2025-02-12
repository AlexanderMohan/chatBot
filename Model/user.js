let mongoose=require('mongoose')
require('dotenv').config()
let url=process.env.mongoAtlas
// let url=process.env.mongoLocal

mongoose.connect("mongodb://localhost:27017/chat", {
    "auth": { "authSource": "admin" },
    "user": "root",
    "pass": "example",
    "useMongoClient": true
});

let schema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    googleID:{
        type:String,
        require:true
    },
    FBID:{
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true
    },
    status:{
        type:Number
    }
})


let user=mongoose.model('user',schema)

module.exports=user

// user.find({},(err,user)=>{
//     if(err) throw err
//     console.log(user)
// })

// user.updateOne({email:'waqasktk81@gmail.com'},{$set:{status:1}},(err,user)=>{
//     if(err) throw err
//     console.log(user)
// })



// user.deleteMany({},(err,res)=>{
//     if(err) throw err,
//     console.log(res)
// })
