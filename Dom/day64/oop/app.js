// constructor function

// function Person(a,b,c)
// {
//     this.name=a
//     this.age=b
//     this.city=c
// }
// let p1= new Person("ASHU",22,"DELHI")
// let p2= new Person("ravi",22,"DELHI")
// console.log(p1,p2);

//// same by own example and in notes also

// function Student(name,age,city,roll)
// {
//     this.name=name
//     this.age=age
//     this.city=city
//     this.roll=roll
// }

// let student1= new Student("Ashutos kr singh",21,"noida",11)
// let student2= new Student("Raj kr singh",23,"mumbai",31)
// let student3= new Student("Bishal kr singh",25,"jammu",15)

// console.log(student1,student2,student3);



// by using class

// class Car{
//     constructor(brand,tyre,colour)
//     {
//         this.brand=brand
//         this.tyre=tyre
//         this.colour=colour
//     }
// }

// let c1= new Car("bmw",4,"black")
// let c2= new Car("mg",4,"white")
// console.log(c1);

//// class by own example

// class Student{
//     constructor(name,age,city,roll){
//         this.name=name
//         this.age=age
//         this.city=city
//         this.roll=roll
//     }
// }
// let student1= new Student("Ashutos kr singh",21,"noida",11)
// let student2= new Student("Raj kr singh",23,"mumbai",31)
// let student3= new Student("Bishal kr singh",25,"jammu",15)

// console.log(student1,student2,student3);


// how to make function inside class

// class Car{
//     constructor(brand,tyre,colour)
//     {
//         this.brand=brand
//         this.tyre=tyre
//         this.colour=colour
//     }
//     tellmeAboutCar()
//     {
//         console.log("hii")
          
//     }
// }

// let c1= new Car("bmw",4,"black")
// let c2= new Car("mg",4,"white")
// console.log(c1,c2);
// Car.prototype.tellmeAboutCar()  // by using class 
// c1.tellmeAboutCar()            // by using object
// c2.tellmeAboutCar()           // by using object


// now how to make useful function inside class

// class Car{
//     constructor(brand,tyre,colour)
//     {
//         this.brand=brand
//         this.tyre=tyre
//         this.colour=colour
//     }
//     tellmeAboutCar()
//     {
//         console.log(this.brand,this.tyre,this.colour)   
//     }
// }

// let c1= new Car("bmw",4,"black")
// let c2= new Car("mg",4,"white")

// console.log(c1,c2);

// c1.tellmeAboutCar()
// c2.tellmeAboutCar()
// Car.prototype.tellmeAboutCar.call(c1) // ye chatt gpt sai kiye hai 



// how to make function inside constructor 


// function Person(a,b,c)
// {
//     this.name=a
//     this.age=b
//     this.city=c
//  Person.prototype.sayhii=function(){
//     console.log("hello ji")
//  }
// }
// let p1= new Person("ASHU",22,"DELHI")
// let p2= new Person("ravi",22,"DELHI")
// console.log(p1,p2);
// p1.sayhii()
// p2.sayhii()

//  to make more usefull function we can do 

// function Person(a,b,c)
// {
//     this.name=a
//     this.age=b
//     this.city=c
//  Person.prototype.sayhii=function(){
//     console.log(`hello my name is ${this.name} , my age is ${this.age} and my city is ${this.city}.`)
//  }
// }
// let p1= new Person("ASHU",22,"DELHI")
// let p2= new Person("ravi",29,"mumbai")
// console.log(p1,p2);
// p1.sayhii()
// p2.sayhii()













