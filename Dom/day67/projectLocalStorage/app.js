const ipbar=document.getElementById("ip")
const btnbar=document.getElementById("btn")
const divbar3=document.getElementById("div3")
const listbar=document.getElementById("list")

btnbar.addEventListener("click",()=>{
    let text=ipbar.value
    if(!ipbar.value)
    {
        alert("please enter some text")
    }

    const libar=document.createElement("li")
    libar.innerText=ipbar.value
    listbar.append(text+",")
    ipbar.value=" "
})