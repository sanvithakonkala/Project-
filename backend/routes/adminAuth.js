const express =require("express")
const User=require("../models/Users")
const bcrypt =require("bcryptjs")
const router=express.Router()

router.get("/",async (req,res)=>{
    try{
        const adminExists= await User.findOne({email:"Admin@gmail.com"})
        if (adminExists){
            return res.status(400).json({"message":"admin already existed"})
        }
        const hashedPassword=await bcrypt.hash("Admin1@",10)
        const admin= new User({
            username:"sai", 
            email:"sai@gmail.com",
            password:hashedPassword,
            mobile:"9786454321",
            role:"admin"
        })
        await admin.save()
        res.json({"message":"Admin created",admin})
    }
    catch(err){
        console.log("internal server error from adminAuth",err)
        return res.status(500).json({"message":"internal server error from adminAuth"})
    }
})

module.exports= router