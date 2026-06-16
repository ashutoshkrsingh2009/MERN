// "use strict"

// this keyword in case of global scope

// console.log(this);

// this keyword in case of functional scope

// function abc()
// {
//     console.log(this);  
// }
// abc()

//  same in case of strict mode 

// function abc()
// {
//     console.log(this);  
// }
// abc()


// let obj={
//     name:"ashu",
//     age:21,
    // abc: function()
    // {
    //     console.log(this);  // point toward itself
    // }
// }
// obj.abc()


// let obj={
//     name:"ashu",
//     age:21,
    // abc2:()=>   
    // {
    //     console.log(this);   // point toward window
    // }
// }
// obj.abc2()


// let obj={
//     name:"ashu",
//     age:21,
//     abc3: function()
//     {
        
//     {
//         console.log(this);   
//     }
//     }
// }
// obj.abc()












// call,apply and bind

// call


// let p1={
//     name:"ashu",
//     age:21,
//     introduce: function(){
//         console.log(`hello my name is ${this.name} and my age is ${this.age}`); 
//     }
// }

// let p2={
//     name:"ravi",
//     age:91,
// }


// p1.introduce()
// p1.introduce.call(p2)




// now make function globally 

//  function introduce(){
//         console.log(`hello my name is ${this.name} and my age is ${this.age}`); 
//     }


// let p1={
//     name:"aks",
//     age:20,
// }

// let p2={
//     name:"avi",
//     age:1,
// }
//  introduce.call(p1)
//  introduce.call(p2)


// extra argument and parameter in case of call

//  function introduce(cities){
//         console.log(`hello my name is ${this.name} and my age is ${this.age} and my city is ${cities}`); 
//     }


// let p1={
//     name:"aks",
//     age:20,
// }

// let p2={
//     name:"avi",
//     age:1,
// }
//  introduce.call(p1,"mumbai")
//  introduce.call(p2,"delhi")




// apply

//  function introduce(cities){
//         console.log(`hello my name is ${this.name} and my age is ${this.age} and my city is ${cities}`); 
//     }


// let p1={
//     name:"aks",
//     age:20,
// }

// let p2={
//     name:"avi",
//     age:1,
// }
//  introduce.apply(p1,["mumbai"])
//  introduce.apply(p2,["delhi"])




// bind 


//  function introduce(cities){
//         console.log(`hello my name is ${this.name} and my age is ${this.age} and my city is ${cities}`); 
//     }


// let p1={
//     name:"aks",
//     age:20,
// }

// let p2={
//     name:"avi",
//     age:1,
// }
//  myintro1=introduce.bind(p1,"mumbai")
//  myintro2=introduce.bind(p2,"delhi")
//  myintro1()
//  myintro2()


// ---------------full class by own ----------------

//----------global scope of this keyword--------------

// console.log(this);  // give window object



//--------------functional scope of this keyword-------------

// by using function non-strict 

// function checkThis(){
//     console.log(this);  
// }
// checkThis()   // give window object

// by using function with strict 

// function checkThis(){
//     "use strict"
//     console.log(this);  // give undefined
// }
// checkThis()




// ------------------this keyword in case of object-------------------

//  function inside object without using strict and non-strict both are same in case of normal function

// let obj={
//     name:"ashu",
//     checkThis:function(){
//         console.log(this);   // give output object itself 
//     }
// }
// obj.checkThis()

//arrow function in case of object.

// let obj={
//     name:"ashu",
//     age:21,
//     checkThis1:()=>{
//         console.log(this);   // output window object
//     }
// }
// obj.checkThis1()


//----------------- call,bind and apply---------------------//

// let p1={
//     name:"ashu",
//     age:21,
//     intro:function(){
//         console.log(`my name is ${this.name} and my age is ${this.age}`); 
//     }
// }

// let p2={
//     name:"Rishu",
//     age:20,
// }
// p1.intro()
// p1.intro.call(p2)

// call 2nd variation.

//  function intro (){
//     console.log(`my name is ${this.myname} and my age is ${this.age}`); 
//     }


// let p1={
//     myname:"ashu",
//     age:21,
// }

// let p2={
//     myname:"Rishu",
//     age:20,
// }
// intro.call(p1)
// intro.call(p2)


// bind now we want to add gender to both

// let p1={
//     name:"ashu",
//     age:21,
//     intro:function(){
//         console.log(`my name is ${this.name} and my age is ${this.age}`); 
//     }
// }

// let p2={
//     name:"Rishu",
//     age:20,
// }
// p1.intro()
// p1.intro.call(p2)

//  add extra parameter iin case of call

//  function intro (city){
//     console.log(`my name is ${this.myname} and my age is ${this.age} and my cities is ${city}`); 
//     }


// let p1={
//     myname:"ashu",
//     age:21,
// }

// let p2={
//     myname:"Rishu",
//     age:20,
// }
// intro.call(p1,"mumbai")
// intro.call(p2,"delhi")


// ------------apply-----------

//  function intro (city){
//     console.log(`my name is ${this.myname} and my age is ${this.age} and my cities is ${city}`); 
//     }


// let p1={
//     myname:"ashu",
//     age:21,
// }

// let p2={
//     myname:"Rishu",
//     age:20,
// }
// intro.apply(p1,["goa"])
// intro.apply(p2,["punjab"])

// ------------in case of bind-------

//  function intro (city){
//     console.log(`my name is ${this.myname} and my age is ${this.age} and my cities is ${city}`); 
//     }


// let p1={
//     myname:"ashu",
//     age:21,
// }

// let p2={
//     myname:"Rishu",
//     age:20,
// }
// const myintro=intro.bind(p1,["goa"])
// const myintro1=intro.bind(p2,["punjab"])
// myintro()
// myintro1()


