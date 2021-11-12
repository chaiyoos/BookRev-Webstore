const express=require("express")
const app=express()
const userRouter=require("./Routes/user")
const bookRouter=require("./Routes/book")
const connectDB=require("./Config/db")

//body-parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//connecting DB
connectDB()

app.use("/user",userRouter)
app.use("/books",bookRouter)

app.get("/",(req,res) => {
    res.send("bookReviewProjectBackend")
})

app.listen(process.env.PORT||1902,(req,res) => {
    console.log("server started")
})