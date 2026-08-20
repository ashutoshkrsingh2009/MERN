const express=require("express")
const router=express.Router()

let users = [
    {
        id: 1,
        name: "Rahul Sharma",
        age: 22,
        email: "rahul@gmail.com",
        city: "Delhi"
    },
    {
        id: 2,
        name: "Priya Singh",
        age: 21,
        email: "priya@gmail.com",
        city: "Kolkata"
    },
    {
        id: 3,
        name: "Aman Kumar",
        age: 24,
        email: "aman@gmail.com",
        city: "Mumbai"
    },
    {
        id: 4,
        name: "Neha Verma",
        age: 23,
        email: "neha@gmail.com",
        city: "Bangalore"
    },
    {
        id: 5,
        name: "Rohit Das",
        age: 25,
        email: "rohit@gmail.com",
        city: "Chennai"
    },
    {
        id: 6,
        name: "Sneha Gupta",
        age: 20,
        email: "sneha@gmail.com",
        city: "Pune"
    },
    {
        id: 7,
        name: "Vikas Yadav",
        age: 26,
        email: "vikas@gmail.com",
        city: "Jaipur"
    },
    {
        id: 8,
        name: "Anjali Roy",
        age: 22,
        email: "anjali@gmail.com",
        city: "Hyderabad"
    },
    {
        id: 9,
        name: "Karan Singh",
        age: 27,
        email: "karan@gmail.com",
        city: "Lucknow"
    },
    {
        id: 10,
        name: "Pooja Mehta",
        age: 21,
        email: "pooja@gmail.com",
        city: "Ahmedabad"
    }
];


router.get("/",(req,res)=>{
    try {
        res.json({
            userData:users
        })
    } catch (error) {
        res.json({
            err:error.message
        })
    }
})

router.delete("/",(req,res)=>{
    try {
        users.length=0
        res.json({
            msg:"user deleted sucessfully",
            UsersData:users
        })
        
    } catch (error) {
        res.json({
            err:error.message
        })
    }
})







module.exports={
    userRouter:router
}