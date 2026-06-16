// //    polymorphism ---- overriding

// class Parent{
//     constructor(name)
//     {
//         this.name=name
//     }
//     sayhii(){
//         console.log("nameste");
        
//     }
// }

// class Child extends Parent{
//     constructor(name,age)
//     {   
//          super(name)
//           this.age=age
//     }
//         sayhii(){
//         console.log("hehehe");  
//     }
// }

// const p= new Parent("ramu");

// const c= new Child("samu",11)

// console.log(p);
// console.log(c);
// c.sayhii()
// p.sayhii()

// ------------full class by own --------------------

//----------- polymorphsm -----overriding


// class Parent{
//     constructor(name,age)
//     {
//         this.name=name
//         this.age=age
//     }
//     say()
//     {
//         console.log("namaste");  
//     }
// }

// class Child extends Parent{
//     constructor(name,age,mobile)
//     {
//         super(name,age)
//         this.mobile=mobile
//     }
// }

// const p1= new Parent("samjeev",49)
// const c1= new Child("ashu",24,"samsung")
// console.log(p1);
// console.log(c1);
// c1.say()

// this is normal ..... 


// but now we are doing overriding over method that is say

// class Parent{
//     constructor(name,age)
//     {
//         this.name=name
//         this.age=age
//     }
//     say()
//     {
//         console.log("namaste");  
//     }
// }

// class Child extends Parent{
//     constructor(name,age,mobile)
//     {
//         super(name,age)
//         this.mobile=mobile
//     }
//     say()
//     {
//         console.log("hello jiii");
        
//     }
// }

// const p1= new Parent("samjeev",49)
// const c1= new Child("ashu",24,"samsung")
// console.log(p1);
// console.log(c1);
// p1.say()
// c1.say()












