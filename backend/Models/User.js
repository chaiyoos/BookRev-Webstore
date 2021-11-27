const mongoose=require("mongoose")
const joi=require("joi")

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    reviewPoints:{
        type:Number,
        default:0
    },
    reviews:
        [
            {
                type:String,
                ref:'Books'
            }
        ]
    

})

function validateUser(user){
    const schema=joi.object({
        name:joi.string().min(3).max(100).required(),
        email:joi.string().required().min(3).max(100),
        password:joi.string().required().min(6).max(100)
    })

    return schema.validate(user)
}

// function validateUserLogin(user){
//     const schema=joi.object({
//         email:joi.string().email().required().min(3).max(100),
//         password:joi.string().required().min(6).max(100)
//     })
//     return schema.validate(user)
// }

module.exports = User = mongoose.model('user', UserSchema)
module.exports.validateUser=validateUser
// module.exports.validateUserLogin=validateUserLogin