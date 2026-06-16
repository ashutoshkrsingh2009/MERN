// //  double underscore protp -> dunder proto 

// let arr=[]
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__.__proto__.__proto__);

// console.log("abc");
// console.log("abc".__proto__);
// console.log("abc".__proto__.__proto__);
// console.log("abc".__proto__.__proto__.__proto__);

// console.log(Array.prototype);
// console.log(arr.hasOwnProperty());

// let obj={a:1}
// console.log(obj.hasOwnProperty());
// console.log(obj.__proto__);


// ------------full class by own------------------ //

// class person {
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
// }

// class person2 {
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
// }

// let p1=new person("ashu",21)
// let p2= new person("aks",20)
// console.log(p1);




// // now find that from which class p1 is made up of //

// console.log(p1 instanceof person)  // output = true because p1 and p2 is object/instance of person class 
// console.log(p2 instanceof person) // output = true because p1 and p2 is object/instance of person class 

// console.log(p1 instanceof person2) // output = false because p1 and p2 is object/instance of person class 
// console.log(p2 instanceof person2) // output = false because p1 and p2 is object/instance of person class 


// --------------- NOW PROOF EVERYTHING INSIDE JS IS AN OBJECT ------------------------//

// let arr=[]
// let obj={}
// let num=31;
// let str="abc"

// console.log(arr);  // output empty array.
// console.log(obj); // output empty object.
// console.log(num); // output 31
// console.log(str); // output abc

// // here we make all four using norwal 

// // now make using class 

// let arr2=new Array()
// let obj2=new Object()
// let num2= new Number(123)
// let str2=new String("ashu")

// console.log(arr2);  // output empty array.
// console.log(obj2); // output empty objject
// console.log(num2); // output object mai {123}
// console.log(str2); // output object mai{'ashu'}

// behind the scene javascript also convert all previous in this form only in object/class form only so we can easily say that everything inside javascript is an object . //

// now understand from which prototype everyone is getting their property ...///  by using(name.__proto__) we will check .//

// let arr=[]
// console.log(arr.__proto__); // [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …] this prove that from Array protype arr is getting all property

// console.log(arr.__proto__.__proto__) // {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}  this prove that Array prototype is getting all property from object prototype.

// console.log(arr.__proto__.__proto__.__proto__) // output null prove that object prototype is first at hiearcey 


// now by usng str

// let str="abc"
// console.log(str.__proto__); // String {'', anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …} this prove that from strng protype arr is getting all property

// console.log(str.__proto__.__proto__) // {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …} // this prove that string prototype is getting all property from object prototype.

//  console.log(str.__proto__.__proto__.__proto__) // output null prove that object prototype is first at hiearcey 


















