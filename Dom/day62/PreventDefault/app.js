const form=document.getElementById("form")
const btn=document.getElementById("")


form.addEventListener("submit",(e)=>{
    e.preventDefault()
})

form.addEventListener("click",()=>{
    console.log("form clicked");
    
})

// window.addEventListener("click",()=>{
//     alert("queque")
// })

window.addEventListener("keypress",(e)=>{
    console.log(e);
    
})

window.addEventListener("contextmenu",(e)=>{
    alert("right clicked is banned")
    e.preventDefault()

})

window.addEventListener("paste",(e)=>{
    alert("pasting not allowed")
    e.preventDefault()
})