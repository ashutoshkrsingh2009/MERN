const api="https://dog.ceo/api/breeds/image/random"
const button=document.getElementById("btn")
const img=document.getElementById("img")

    fetch(api)
    .then((res)=>{
       return res.json()
    })
    .then((data)=>{
        img.src=data.message
    })


button.addEventListener("click",()=>{
    fetch(api)
    .then((res)=>{
       return res.json()
    })
    .then((data)=>{
        img.src=data.message
    })
})