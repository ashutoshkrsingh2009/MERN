// console.log("start");
// setTimeout(()=>{
//   console.log("setTimeout");  
// },2000)

// new Promise((res,rej)=>{
//     res("promise")
// }).then((data)=>{
//     console.log(data); 
// })
// console.log("end");

// output=  ->start -> end -> promise -> settimeout


// console.log("start");
// setTimeout(()=>{
//   console.log("setTimeout");  
// },2000)


// new Promise((res,rej)=>{
//     setTimeout(()=>{
//      res("promise resolve")
//     },4000)
// }).then((data)=>{
//     console.log(data); 
// })
// console.log("end");

// output=  ->start -> end -> settimeout -> promise

// we can visualize this all on website js visualizer