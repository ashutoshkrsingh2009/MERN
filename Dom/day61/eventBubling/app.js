// const myouter=document.getElementById("outer")
// const mymiddle=document.getElementById("middle")
// const myinner=document.getElementById("inner")

// myouter.addEventListener("click",()=>{
//     console.log("outer click")
// })

// mymiddle.addEventListener("click",()=>{
//     console.log("middle click")
// })

// myinner.addEventListener("click",()=>{
//     console.log("inner click")
// })

// 

// myouter.addEventListener("click",()=>{
//     console.log("outer click")
// },true)

// mymiddle.addEventListener("click",()=>{
//     console.log("middle click")
// },true)

// myinner.addEventListener("click",()=>{
//     console.log("inner click")
// },true)


// ---------full practice by own--------

// in case of bubling

// const myout=document.getElementById("out")
// const mymid=document.getElementById("mid")
// const myinn=document.getElementById("inn")

// myout.addEventListener("click",()=>{
//     console.log("outer clicked")
// })

// mymid.addEventListener("click",()=>{
//     console.log("middle clicked")
// })

// myinn.addEventListener("click",()=>{
//     console.log("inner clicked")
// })


// in case of capturing

const myout=document.getElementById("out")
const mymid=document.getElementById("mid")
const myinn=document.getElementById("inn")

myout.addEventListener("click",()=>{
    console.log("outer clicked")
},true)

mymid.addEventListener("click",()=>{
    console.log("middle clicked")
},true)

myinn.addEventListener("click",()=>{
    console.log("inner clicked")
},true)