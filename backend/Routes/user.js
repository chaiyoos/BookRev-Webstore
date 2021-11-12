const express=require("express")
const {validateUser} = require("../Models/User")
// const {validateUserLogin} = require("../Models/User")
const router=express.Router()
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const config=require("config")
const JOI=require("joi")
const User=require("../Models/User")

//AUTH routes
router.post("/register",async (req,res)=>{
    
    const {errors}= validateUser(req.body)
    if(errors){
        return res.status(460).json({errors:errors})
    }

    const{name,email,password}=req.body
    
    try {
        var user =await User.findOne({email:req.body.email})

        if(user){
            return res.status(461).json({"sucess":false,"error":"user already exists"})
        }

        var user=new User({
            name,
            email,
            password
        })

        //password encryption
        const salt=await bcrypt.genSalt(10)
        user.password=await bcrypt.hash(password,salt)
        await user.save()

        //JWT
        const payload={
            user:{
                id:user._id
            }
        }

        jwt.sign(payload,config.get("JWTsecret"),{expiresIn:360000},function(err,token){
            if(err) throw err
            res.json({"dataSent":true,token})
        })

        console.log(req.body)

    } catch (error) {
        console.error(error.message)
        res.status(500).json({error:error.message})
    }
    
})

//USER login

function validateUserLogin(user){
    const schema=JOI.object({
        email:JOI.string().required().min(3).max(100),
        password:JOI.string().required().min(6).max(100)
    })

    return schema.validate(user)
}

router.post("/login", async(req,res) => {
    
    const {errors}= validateUserLogin(req.body)
    if(errors){
        return res.status(460).json({errors:errors})
    }
    const {email,password}=req.body

    try {
        //user exists?
        var user=await User.findOne({email})

        if(!user){
            res.status(400).json({message:"invalid credentials"})
        }

        //comparing passwords
        const isMatch=await bcrypt.compare(password,user.password)

        if(!isMatch){
            res.status(400).json({error:"invalid credentials"})
        }

        //returning jwt
        const payload={
            user:{
                id:user._id
            }
        }

        jwt.sign(payload,config.get("JWTsecret"),{expiresIn:360000},function(err,token){
            if (err) throw err
            res.json({"logged in":true,token})
        })

        console.log(req.body)


    } catch (error) {
        console.error(error.message)
        res.status(500).send("server error")
    }

    // console.log(req.body)
    // res.send("login route")

})

module.exports= router
