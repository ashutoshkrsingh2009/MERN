// method of object

// prevent extention 

// const obj={
//     name:"ashu",
//     age:23    
// }
// console.log(obj);

// obj.city="delhi"
// obj["country"]="india"

// console.log(obj);





// const obj={
//     name:"ashu",
//     age:23    
// }
// Object.preventExtensions(obj)

// obj.city="delhi"
// obj["country"]="india"
// obj.delete.age

// console.log(obj);

const obj={
    name:"ashu",
    age:23,
}
Object.seal(obj)
obj.delete.age
console.log(obj);