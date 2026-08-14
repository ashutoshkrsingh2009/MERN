const mytext=document.getElementById("text")
const number=document.getElementById("number")

mytext.addEventListener("input",(e)=>{
   let text=e.target.value
   number.innerText=text.length
})