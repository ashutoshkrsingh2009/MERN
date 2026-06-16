// const titleBar = document.getElementById("title")
// const addBtn = document.getElementById("btn")
// const list = document.getElementById("list")


// addBtn.addEventListener("click", () => {

//     if (!titleBar.value.trim()) {
//         alert("Please enter a task")
//         return
//     }

//     const li = document.createElement("li")

//     li.textContent = titleBar.value

//     li.addEventListener("click", () => {
//         li.remove()
//     })
//     li.style.backgroundColour = "lightblue"

//     list.appendChild(li)

//     titleBar.value = ""
// })






// const btn=document.getElementById("btn")
// const input = document.getElementById("ip")
// const list=document.getElementById("list")

// btn.addEventListener("click" ,()=>{
//     const text=input.value
//     if(!text){
//         alert("please enter some text")
//     }
//     const listitem=document.createElement("li")
//     listitem.style.cursor="pointer"
//     listitem.style.backgroundColor="yellow"
//     listitem.innerText=text
//     listitem.style.margin="20px"
//     list.append(listitem)
//     input.value=""
// })
// list.addEventListener("click",(e)=>{
//     if(e.target.tagName=="LI")
//     {
//         e.target.remove()
//     }
// })






// const username=document.getElementById("user")
// const mybtn=document.getElementById("btn")
// const mylist=document.getElementById("list")

// mybtn.addEventListener("click",()=>{
//     const uservalue=username.value
//     if(!uservalue){
//         alert("please enter username")
//         return
//     }
//     const listitem=document.createElement("li")
//     mylist.append(uservalue)
//     username.value=""
// })
// list.addEventListener("click",(e)=>{
//     if(e.target.tagName="LI")
//     {
//         e.target.remove()
//     }
// })