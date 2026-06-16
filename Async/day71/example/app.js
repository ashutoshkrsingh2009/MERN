const container=document.getElementById("main")
const api="https://hp-api.onrender.com/api/characters"
fetch(api)
.then((res)=>{
    return res.json()
}).then((data)=>{
    
    for(let item of data)
    {
        console.log(item);
        
       const card=document.createElement("article")

       const img = document.createElement("img")
       img.src = item.image || "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"

       const name =document.createElement("h3")
       name.innerText= item.name

       const textcontainer=document.createElement("div")
       textcontainer.append(name)

    //    style
        img.style.height="300px"
        img.style.width="300px"
        card.style.width="300px"
        card.style.border="2px solid red"

        card.append(img,textcontainer)
        container.append(card)
    }

    
})