const express = require("express");

const app = express();

const users = [
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
        name: "Aman Verma",
        age: 24,
        email: "aman@gmail.com",
        city: "Mumbai"
    },
    {
        id: 4,
        name: "Neha Gupta",
        age: 23,
        email: "neha@gmail.com",
        city: "Bangalore"
    },
    {
        id: 5,
        name: "Rohit Kumar",
        age: 25,
        email: "rohit@gmail.com",
        city: "Hyderabad"
    }
];

app.get("/users", (req, res) => {
    try {
        res.json(users);
    } catch (error) {
        res.json({
            err : error.message
        });
    }
});

app.delete("/users", (req, res) => {
    
    try {
        throw new Error("hehe")
        const obj = users.pop();

        res.json({
            msg: "done",
            delUser: obj
        });
    } catch (error) {
        res.json({
            err : error.message
        });
    }
});

app.listen(8080, () => {
    console.log("server running on 8080");
});