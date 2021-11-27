const express=require("express")
const router=express.Router()
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const config=require("config")
const JOI=require("joi")
const User=require("../Models/User")
const {validateBook}=require("../Models/Books")
const Book=require("../Models/Books")
const auth = require("../Middleware/auth")

//AUTH routes
router.get("/",async (req,res)=>{
    try {
        const posts=await Book.find()
        res.json(posts)
    } catch (error) {
        console.error(error.message)
        res.status(500).json({message:"server error"})
    }
})

//AUTH TEST ROUTE



//ADMIN ROUTE

router.post("/post",auth,async (req,res) => {
    const {errors}=validateBook(req.body)
    if(errors){
        res.status(406).json({errors:errors})
    }

    const {name,genre,author,imageLink}=req.body

    try {
        const book=new Book({
            name,
            genre,
            author,
            imageLink
        })

        const newBook=await book.save()

        res.json({"success":true,newBook})

    } catch (error) {
        console.error(error.message)
        res.status(500).json({"error":error.message})
    }

    console.log(req.body)
    
})

//VALIDATE FUNCTION FOR REVIEWS

//Reviews route 
router.post("/post/reviews/:id",auth,async (req,res) => {
    // const {errors}=validateBook(req.body)
    // if(errors){
    //     res.status(406).json({errors:errors})
    // }

    // const {name,genre,author,imageLink}=req.body

    try {
        const user=await User.findById(req.user.id)
        const book=await Book.findById(req.params.id)
        
        const newComment={
            text:req.body.text,
            name:user.name,
            user:req.user.id,
        }
        console.log(newComment)
        book.comments.unshift(newComment)
        if(user.reviewPoints==0){
            user.reviewPoints+=5
        }else{
            user.reviewPoints+=5
        }
        await book.save()
        const reviewText=book.comments[0].text
        user.reviews.unshift(reviewText)
        await user.save()
        
        res.json({"success":true,"comments":book.comments,reviewsByUser:user.reviews}) 
    } catch (error) {
        console.error(error.message)
        res.status(500).json({"error":error.message})
    }

    console.log(req.body)
    
})



//LIKING A REVIEW

// router.put("/post/reviews/like/:id",auth,async(req,res)=>{
//     try {
//         const book=Book.findById(req.params.id)
//         if(book.comments.likes.filter(like => like.user.toString()==req.user.id ).length>0){
//             return res.status(400).json({message:"review already liked"})
//         }
//         book.likes.unshift({user:req.user.id})
//         await book.save()
//     } catch (error) {
//         console.error(error)
//         res.status(500).send("server error")
//     }
// })


module.exports= router
