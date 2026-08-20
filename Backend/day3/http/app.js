// const http=require("http")
// const server=http.createServer((req,res)=>{
//     console.log(req.url);
//     // res.end("hatt pagal")
//     if(req.url=="/abc")
//     {
//     res.end("abc")
//     }
//     else if(req.url=="/users")
//     {
//           res.end("user");
        
//     }
//     else if(req.url=="/products")
//     {
//         res.end("product");
        
//     }
//     else if(req.url=="/about")
//     {
//         res.writeHead(200,{'content-type':'text/html'})
//         res.end(`<h1>Hello World</h1>`)
//     }
//     else
//     {
//         res.end("404--errror")
//     }
    

// })
// server.listen(8080,()=>{
//     console.log("server running");
    
// })


// http method and postman

// const http=require("http")
// const server=http.createServer((req,res)=>{
//     console.log(req.url);
//     if(req.url=="/users" && req.method=="GET")
//     {
//           res.end("users");  
//     }
//     else if(req.url=="/users" && req.method=="DELETE")
//     {
//         res.end("users api 2")
//     }
//     else
//     {
//         res.end("404--errror")
//     }
    

// })
// server.listen(8080,()=>{
//     console.log("server running");
    
// })




// -----------------full class by own



// const { log } = require("console")
// const http=require("http")   //importing http

// const server= http.createServer((req,res)=>{
//     console.log(req.url); 
//     // // this is req.url whis is use to dedtact wha written after port number
//     // res.end("hello") 
//    // use to print on frontend

//    if(req.url== "/about")
//    {
//     res.end("about page")
//    }
//    else if (req.url== "/products")
//    {
//     res.end("product page")
//    }
//    else if(req.url=="/users")
//    {
//     res.end("user page")
//    }
//    else
//    {
//     res.end("404 ----page not found")
//    }
  

// })
// server.listen(8080,()=>{
//     console.log("server running on port 8080"); 
// })

// ------postman --------// and Method of http

const { log } = require("console")
const http=require("http")   //importing http

const server= http.createServer((req,res)=>{
    console.log(req.url); 
    // // this is req.url whis is use to dedtact wha written after port number
    // res.end("hello") 
   // use to print on frontend

   if(req.url== "/about" && req.method=="GET")
   {
    res.end("GET about page")
   }
   else if(req.url== "/about" && req.method=="POST")
   {
    res.end("POST about page")
   }

   else if (req.url== "/products")
   {
    res.end("product page")
   }
   else if(req.url=="/users")
   {
    res.end("user page")
   }
   else
   {
    res.end("404 ----page not found")
   }
  

})
server.listen(8080,()=>{
    console.log("server running on port 8080"); 
})