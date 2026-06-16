// const darkModeBtn = document.getElementById("dark")
// const lightModeBtn = document.getElementById("light")
// const mainBox = document.getElementById("text")
// const input = document.getElementById("ip")
// const heading = document.getElementById("heading")

// darkModeBtn.addEventListener("click",()=> {
//     mainBox.style.backgroundColor = "black"
//     mainBox.style.color = "white"
// })


// lightModeBtn.addEventListener("click",()=> {
//     mainBox.style.backgroundColor = "white"
//     mainBox.style.color = "black"
// })


// // window.addEventListener("load", ()=>{
// //     input.focus()

// // })

// input.addEventListener("focus", ()=>{
//     input.style.width = "30%"
// })

// input.addEventListener("blur", ()=>{
//     input.style.width = "15%"
// })

// input.addEventListener("input",(e) =>{
//     // console.log(input.value);
//     // console.log(e.target.value);
//     heading.innerText = e.target.value
    
// })


// full class by own

const lightmode=document.getElementById("light")
const darkmode=document.getElementById("dark")

const divcontent=document.getElementById("divbar2")

const input=document.getElementById("inputbar")

const typing=document.getElementById("type")













lightmode.addEventListener("click",()=>{
    divcontent.style.backgroundColor='white'
    divcontent.style.color="black"
})

darkmode.addEventListener("click",()=>{
divcontent.style.backgroundColor='black'
divcontent.style.color="white"
})



// this all work on window 

// window.addEventListener("load",()=>{
//     input.focus()
// })




// input.addEventListener("focus",()=>{
//     input.style.height="40%"
//     input.style.width="40%"
// })
// input.addEventListener("blur",()=>{
//     input.style.height="12.3%"
//     input.style.width="12.3%"
// })

// input.addEventListener("input",()=>{
//     console.log(input.value);
    
// })

// input.addEventListener("input",(e)=>{
//     console.log(e.target.value);
    
// })

input.addEventListener("input",(e)=>{
    typing.innerText=e.target.value
})