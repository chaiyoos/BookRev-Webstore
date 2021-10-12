const express=require("express")
const app=express()
const userRouter=require("./Routes/user")

app.use("/user",userRouter)

app.get("/",(req,res) => {
    res.send("bookReviewProjectBackend")
})

app.listen(process.env.PORT||1902,(req,res) => {
    console.log("server started")
})