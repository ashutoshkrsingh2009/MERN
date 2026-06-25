// dataset

const image=document.getElementById("img")
const button=document.getElementById("btn")

button.addEventListener("click",()=>{
    image.src=image.dataset.name
})