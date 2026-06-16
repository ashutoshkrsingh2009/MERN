const mydiv=document.getElementById("box")
mydiv.addEventListener("click",() =>{
    alert("div clicked")
})

// same but another way


function divclicked(){
    alert("div0000 clicked")
}

const mydiv=document.getElementById("box")
mydiv.addEventListener("click",divclicked)