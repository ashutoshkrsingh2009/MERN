const api="https://dog.ceo/api/breeds/image/random"
const button=document.getElementById("btn")
const image=document.getElementById("img")
const screen=document.getElementById("screen")


    fetch(api)
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        image.src=data.message
        screen.append(image)
    })

button.addEventListener("click",()=>{
    fetch(api)
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        // image.src=data.message
        // screen.append(image)
        newImage=document.createElement("img")
        newImage.id="newimg"
        newImage.src=data.message
        screen.append(newImage)
    })
})