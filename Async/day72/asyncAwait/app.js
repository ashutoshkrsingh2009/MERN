const api="https://dog.ceo/api/breeds/image/random"
const button=document.getElementById("btn")
const img=document.getElementById("img")


button.addEventListener("click", async ()=>{
    const res= await fetch(api)
    const data = await res.json()
    img.src = data.message
})