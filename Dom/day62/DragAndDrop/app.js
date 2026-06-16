const box1=document.getElementById("first")
const box2=document.getElementById("second")
const ele=document.getElementById("element")

ele.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData("kuchBhi",e.target.id)
})
 
box1.addEventListener("dragover",(e)=>{
    e.preventDefault()
})

box1.addEventListener("drop",(e)=>{
    // e.preventDefault()
    const mydata=e.dataTransfer.getData("kuchBhi")
    e.target.appendChild(document.getElementById(mydata))
})

box2.addEventListener("dragover",(e)=>{
    e.preventDefault()
})

box2.addEventListener("drop",(e)=>{
    // e.preventDefault()
    const mydata=e.dataTransfer.getData("kuchBhi")
    e.target.appendChild(document.getElementById(mydata))
})

