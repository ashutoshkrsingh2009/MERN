const mylist=document.getElementById("list")

// const myli=document.createElement("li")
// myli.innerText="apple"
// mylist.appendChild(myli)

// const myli2=document.createElement("li")
// myli2.innerText="bat"
// mylist.appendChild(myli2)

// now using loop we can do this 

let data=["apple","bat","ball","cat","kiwi"]
for(let item of data)
{
   let myli=document.createElement("li")
   myli.innerText=item
   mylist.appendChild(myli)
}
