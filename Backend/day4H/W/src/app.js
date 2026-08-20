require("dotenv").config()

const express=require("express")
const app=express()

const {productRouter}=require("./routes/Product.routes")
const {userRouter}=require("./routes/user.routes")
const {counterRouter}=require("./routes/counter.routes")

app.use("/api/products",productRouter)
app.use("/api/users",userRouter)
app.use("/api/counter",counterRouter)




const port=process.env.PORT || 8080
app.listen(port,()=>{
    console.log(`server is running on port.....${port}`);
})