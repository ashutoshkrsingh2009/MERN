// dataset

const image=document.getElementById("img")
const button=document.getElementById("btn")

button.addEventListener("click",()=>{
    image.src=image.dataset.name
})

const btnn=document.getElementById("bt")
const div=document.getElementById("div")
btnn.addEventListener("click",()=>{
  const p= document.createElement("p")
   p.innerText="ashutosh"
   div.append(p)
})