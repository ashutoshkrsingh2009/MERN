// // diffrence between append and appendChild

// const mybox=document.getElementById("box")

// const p1=document.createElement("p")
// p1.innerText="lorem1"

// const p2=document.createElement("p")
// p2.innerText="lorem2"

// const p3=document.createElement("p")
// p3.innerText="lorem3"

// // mybox.appendChild(p1)   // // output p1 but older way

// // mybox.appendChild(p1,p2,p3)  // // no output and older way

// // mybox.append(p1)   // // new way 

// mybox.append(p1,p2,p3) 


// // attributes


// const mybox=document.getElementById("box2")
// mybox.setAttribute("class","abc")
// mybox.setAttribute("abc","ids")
// mybox.setAttribute("id","idies")


// let abc=mybox.getAttribute("id")
// console.log(abc);

// let xyz=mybox.getAttribute("style")
// console.log(xyz);


// uses of attributes

const mylist=document.getElementById("list")
let fruits = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Blackberry",
  "Blueberry",
  "Cherry",
  "Coconut",
  "Dragon Fruit",
  "Fig",
  "Grapes",
  "Guava",
  "Kiwi",
  "Lemon",
  "Mango",
  "Orange",
  "Papaya",
  "Peach",
  "Pear",
  "Pineapple",
  "Plum",
  "Pomegranate",
  "Raspberry",
  "Strawberry",
  "Watermelon"
];
let count=1
for(let item of fruits)
{
    let lis=document.createElement("li")
    lis.innerText=item
    lis.setAttribute("class",count)
    count++
    list.append(lis)
}





