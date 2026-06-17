const api="https://dog.ceo/api/breeds/image/random"
const button=document.getElementById("btn")
const image=document.getElementById("img")
const screen=document.getElementById("screen")




async function getdata(){
 const res=await fetch(api)
 const data=await res.json()
    image.src=data.message
    screen.append(image)
}
getdata()
  

button.addEventListener("click", async()=>{
 const res=await fetch(api)
 const data=await res.json()
        // image.src=data.message
        // screen.append(image)
        newImage=document.createElement("img")
        newImage.id="newimg"
        newImage.src=data.message
        screen.append(newImage)
    })