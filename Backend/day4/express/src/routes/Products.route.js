const express=require("express")
const router=express.Router()

const products = [
    {
        id: 1,
        name: "iPhone 15",
        price: 69999,
        category: "Mobile",
        brand: "Apple",
        stock: 10
    },
    {
        id: 2,
        name: "Galaxy S24",
        price: 74999,
        category: "Mobile",
        brand: "Samsung",
        stock: 15
    },
    {
        id: 3,
        name: "MacBook Air M2",
        price: 89999,
        category: "Laptop",
        brand: "Apple",
        stock: 8
    },
    {
        id: 4,
        name: "HP Pavilion",
        price: 65999,
        category: "Laptop",
        brand: "HP",
        stock: 12
    },
    {
        id: 5,
        name: "Sony WH-1000XM5",
        price: 29999,
        category: "Headphones",
        brand: "Sony",
        stock: 20
    },
    {
        id: 6,
        name: "AirPods Pro 2",
        price: 24999,
        category: "Earbuds",
        brand: "Apple",
        stock: 25
    },
    {
        id: 7,
        name: "Samsung 55 inch 4K TV",
        price: 54999,
        category: "Television",
        brand: "Samsung",
        stock: 7
    },
    {
        id: 8,
        name: "Mi Smart Watch",
        price: 4999,
        category: "Smartwatch",
        brand: "Xiaomi",
        stock: 30
    },
    {
        id: 9,
        name: "Logitech MX Master 3S",
        price: 8999,
        category: "Mouse",
        brand: "Logitech",
        stock: 18
    },
    {
        id: 10,
        name: "Dell 24 inch Monitor",
        price: 14999,
        category: "Monitor",
        brand: "Dell",
        stock: 14
    }
];

  router.get("/",(req,res)=>{
       try {
        res.json({
            data:products
        })
       } catch (error) {
        res.json({
            err:error.message
        })
       }
  })

 router.delete("/",(req,res)=>{
    try {
        const removedVal=products.pop()
        res.json({
            msg:"product removed",
            removedData:removedVal

        })
    } catch (error) {
        res.json({
            err:error.message
        })
    }
 })

module.exports={
    ProductRouter:router
}
