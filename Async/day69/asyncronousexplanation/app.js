

// console.log("maggi banao")

// setTimeout(()=>{
//     console.log("sauce aagayi"); 
// },4000)

// console.log("maggi kha lo");


// same but adding one extra loop and time is 0


// console.log("maggi banao")

// setTimeout(()=>{
//     console.log("sauce aagayi"); 
// },0)

// console.log("maggi kha lo");

// for(let i=0;i<999999999;i++)
// {

// }


// setTimeout(()=>{
//     console.log("one");
    
// },3000)

// setTimeout(()=>{
//     console.log("two");
    
// },3000)

// setTimeout(()=>{
//     console.log("three");
    
// },3000)


//  same but time change

// setTimeout(()=>{
//     console.log("one");
    
// },3000)

// setTimeout(()=>{
//     console.log("two");
    
// },2000)

// setTimeout(()=>{
//     console.log("three");
    
// },1000)

// const body=document.getElementById("bd")
// const ad=document.createElement("h1")
// ad.innerText="kharid lo bhai sasta hai"
// setTimeout(()=>{
//     body.append(ad)
// },4000)


// const intervalid=setInterval(()=>{
//     console.log("hello");
    
// },0)
// clearInterval(intervalid)


const body =document.getElementById("bd")
const ad=document.createElement("article")
const adtext=document.createElement("h1")
const adclosebtn=document.createElement("button")
adtext.innerText="this is your ads"
adclosebtn.innerText="close ads"
ad.append(adtext,adclosebtn)
ad.addEventListener("click",()=>{
    ad.remove()
})

setInterval(() => {
    body.append(ad)
},3000);





// create your own setinterval function using settimeout

// function mysetinerval (cb,delay)
// {
//     let id;
//     function repeat()
//     {
//         cb()
//         id=setTimeout(repeat,delay)
//     }
//     id=setTimeout(repeat,delay)
//     return()=>clearTimeout(id)
// }

// const fn = mysetinerval(()=>{
//     console.log("okk");
    
// },1000)

// setInterval(()=>{
// fn() 
// },5000)



// full class by own 

// setTimeout(()=>{
//     console.log("one"); 
// },4000)

// setTimeout(()=>{
//     console.log("two"); 
// },3000)

// setTimeout(()=>{
//     console.log("three"); 
// },2000)


// setTimeout(()=>{
//     console.log("one"); 
// },1000)

// setTimeout(()=>{
//     console.log("two"); 
// },2000)

// setTimeout(()=>{
//     console.log("three"); 
// },3000)


// ek add 5 second badd website pai aaya 


// const body=document.getElementById("bd")
// const ad=document.createElement("h1")
// ad.innerText="khalid lo !!"
// setTimeout(()=>{
//     body.append(ad)
// },5000)


// ek add 5 second badd website pai aaya aur sath mai cut button


// const body=document.getElementById("bd")
// const add=document.createElement("article")
// const addtext=document.createElement("h1")
// const closebtn=document.createElement("button")
// addtext.innerText="khalid lo !!"
// closebtn.innerText="close add"
// add.append(addtext,closebtn)

// setTimeout(()=>{
//     body.append(add)
// },5000)

// add.addEventListener("click",()=>{
//     add.remove()
// })

// -------------using set interval


// const body=document.getElementById("bd")
// const add=document.createElement("article")
// const addtext=document.createElement("h1")
// const closebtn=document.createElement("button")
// addtext.innerText="khalid lo !!"
// closebtn.innerText="close add"
// add.append(addtext,closebtn)

// setInterval(()=>{
//     body.append(add)
// },5000)

// add.addEventListener("click",()=>{
//     add.remove()
// })




//  ---------setInterval----------

//  const intervalid=setInterval(()=>{
//     console.log("hello");
    
// },0)


// same but diff


//  const intervalid=setInterval(()=>{
//     console.log("hello");
    
// },0)

// clearInterval(intervalid)









