const mongoose=require("mongoose")
const joi=require("joi")
const BookSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    imageLink:{
        type:String,
        required:true
    },
    comments:[
        {
        text:{
            type: String
        },
        name:{
            type:String
        },
        likes:[
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'user'
            },
            type:Number,
            default:0
                
        }
    ]
    }
    ]


})

function validateBook(book){
    const schema=joi.object({
        name:joi.string().min(1).max(100).required(),
        author:joi.string().required().min(1).max(100),
        genre:joi.string().required().min(1).max(100),
        imageLink:joi.string().required().min(1).max(1000)
    })

    return schema.validate(book)
}

module.exports=Book=mongoose.model('book',BookSchema)
module.exports.validateBook=validateBook