// require("dotenv").config()
// const express=require("express")
// const app=express()


// const users = [
//     {
//         id: 1,
//         name: "Rahul Sharma",
//         age: 22,
//         email: "rahul@gmail.com",
//         city: "Delhi"
//     },
//     {
//         id: 2,
//         name: "Priya Singh",
//         age: 21,
//         email: "priya@gmail.com",
//         city: "Kolkata"
//     },
//     {
//         id: 3,
//         name: "Aman Kumar",
//         age: 24,
//         email: "aman@gmail.com",
//         city: "Mumbai"
//     },
//     {
//         id: 4,
//         name: "Neha Verma",
//         age: 23,
//         email: "neha@gmail.com",
//         city: "Bangalore"
//     },
//     {
//         id: 5,
//         name: "Rohit Das",
//         age: 25,
//         email: "rohit@gmail.com",
//         city: "Chennai"
//     },
//     {
//         id: 6,
//         name: "Sneha Gupta",
//         age: 20,
//         email: "sneha@gmail.com",
//         city: "Pune"
//     },
//     {
//         id: 7,
//         name: "Vikas Yadav",
//         age: 26,
//         email: "vikas@gmail.com",
//         city: "Jaipur"
//     },
//     {
//         id: 8,
//         name: "Anjali Roy",
//         age: 22,
//         email: "anjali@gmail.com",
//         city: "Hyderabad"
//     },
//     {
//         id: 9,
//         name: "Karan Singh",
//         age: 27,
//         email: "karan@gmail.com",
//         city: "Lucknow"
//     },
//     {
//         id: 10,
//         name: "Pooja Mehta",
//         age: 21,
//         email: "pooja@gmail.com",
//         city: "Ahmedabad"
//     }
// ];

// const products = [
//     {
//         id: 1,
//         name: "iPhone 15",
//         price: 69999,
//         category: "Mobile",
//         brand: "Apple",
//         stock: 10
//     },
//     {
//         id: 2,
//         name: "Galaxy S24",
//         price: 74999,
//         category: "Mobile",
//         brand: "Samsung",
//         stock: 15
//     },
//     {
//         id: 3,
//         name: "MacBook Air M2",
//         price: 89999,
//         category: "Laptop",
//         brand: "Apple",
//         stock: 8
//     },
//     {
//         id: 4,
//         name: "HP Pavilion",
//         price: 65999,
//         category: "Laptop",
//         brand: "HP",
//         stock: 12
//     },
//     {
//         id: 5,
//         name: "Sony WH-1000XM5",
//         price: 29999,
//         category: "Headphones",
//         brand: "Sony",
//         stock: 20
//     },
//     {
//         id: 6,
//         name: "AirPods Pro 2",
//         price: 24999,
//         category: "Earbuds",
//         brand: "Apple",
//         stock: 25
//     },
//     {
//         id: 7,
//         name: "Samsung 55 inch 4K TV",
//         price: 54999,
//         category: "Television",
//         brand: "Samsung",
//         stock: 7
//     },
//     {
//         id: 8,
//         name: "Mi Smart Watch",
//         price: 4999,
//         category: "Smartwatch",
//         brand: "Xiaomi",
//         stock: 30
//     },
//     {
//         id: 9,
//         name: "Logitech MX Master 3S",
//         price: 8999,
//         category: "Mouse",
//         brand: "Logitech",
//         stock: 18
//     },
//     {
//         id: 10,
//         name: "Dell 24 inch Monitor",
//         price: 14999,
//         category: "Monitor",
//         brand: "Dell",
//         stock: 14
//     }
// ];

//   app.get("/products",(req,res)=>{
//        try {
//         res.json({
//             data:products
//         })
//        } catch (error) {
//         res.json({
//             err:error.message
//         })
//        }
//   })

//  app.delete("/products",(req,res)=>{
//     try {
//         const removedVal=products.pop()
//         res.json({
//             msg:"product removed",
//             removedData:removedVal

//         })
//     } catch (error) {
//         res.json({
//             err:error.message
//         })
//     }
//  })



//     app.get("/users",(req,res)=>{
//        try {
//         res.json({
//             data:users
//         })
//        } catch (error) {
//         res.json({
//             err:error.message
//         })
//        }
//   })


//  app.delete("/users",(req,res)=>{
//     try {
//         const removedVal=users.pop()
//         res.json({
//             msg:"user removed",
//             removedData:removedVal

//         })
//     } catch (error) {
//         res.json({
//             err:error.message
//         })
//     }
//  })

// const port=process.env.PORT || 8080
// app.listen(port,()=>{
//     console.log(`server running on port ${port}`);
    
// })

// here we are doing all stuff n one file that is app.js but we have to make another another file to keep seperation of concern so we make 2 another file in another folder that is src and src two file that is product.routes.js and user.routes.js



require("dotenv").config()
const express=require("express")
const app=express()

const {UserRouter}=require("./routes/Users.route")
const {ProductRouter}=require("./routes/Products.route")



app.use("/api/users",UserRouter)
app.use("/api/products",ProductRouter)

app.use((req,res)=>{
    res.json({
        err:"not found"
    })
})

const port=process.env.PORT || 8080

app.listen(port,()=>{
    console.log(`server running on Port ${port}`);
})