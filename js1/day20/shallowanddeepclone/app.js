// let arr=[1,2,3,4,5,6]
// let copy=arr   // making copy using normal
// console.log(arr);
// console.log(copy);

// let arr=[1,2,3,4,5,6]
// let copy=arr
// //// now if we want to push other item to array then
// copy.push(22)

// console.log(arr);    // issue that we push 22 in copy but as we see in original array also push 22 so this is wrong 
// console.log(copy);  // now make correct using spread operator to make copy

//// ---------------now make copy using spread operator------------------
// let arr=[1,2,3,4,5,6]
// let copy=[...arr]
// console.log(arr);
// console.log(copy);

////------------now push any value to copy arr------
// let arr=[1,2,3,4,5,6]
// let copy=[...arr]
// copy.push(22)
// console.log(arr);
// console.log(copy);
//// here no changes in main array so making copy with spread operator allow make changes in only copy array


////---------------shallow copy in nested array------------
// let arr=[1,2,3,4,[5,6,7]]
// let copy=[...arr]
// console.log(arr);
// console.log(copy);

// ////---------------now when we do pop working right------------//
// let arr=[1,2,3,4,[5,6,7]]
// let copy=[...arr]
// copy.pop()
// console.log(arr);
// console.log(copy);

// ////---------------now when we do push item then  working right------------//
// let arr=[1,2,3,4,[5,6,7]]
// let copy=[...arr]
// copy.push(11)
// console.log(arr);
// console.log(copy);

////-----------------now when we try to push item to nested loop in copy then not working right
// let arr=[1,2,3,4,[5,6,7]];
// let copy=[...arr];
// copy[4].push(11)
// console.log(arr);
// console.log(copy);

//// assign method in object

// let obj1={
//     a:1
// }

// let obj2={
//     b:2
// }

// Object.assign(obj1,obj2)
// console.log(obj1);
// console.log(obj2);

////----------shallow copy in object----------
// let obj={
//     name:"ashu",
//     age:21,
//     city:"goa"
// }
// // now make copy using spread operator
// let copy={
//     ...obj
// }
// console.log(obj);
// console.log(copy);

//// now make changes in copy 

// let obj={
//     name:"ashu",
//     age:21,
//     city:"begusarai"
// }
// //  make copy using spread operator
// let copy={
//     ...obj
// }
// //  make changes in copy
// copy.name="anand"
// copy.age=5
// console.log(obj);
// console.log(copy);

// // here working good shallow operator and only make changes in copy not original

////shallow copy in nested object

// let person1={
//     name:"ashu",
//     age :21,
//     address:{
//         city:"delhi",
//         country:"india"
//     }
// }
// let person2={
//     ...person1
// }
// console.log(person1);
// console.log(person2);


//// now make changes in person2 that is copy
// let person1={
//     name:"ashu",
//     age :21,
//     address:{
//         city:"delhi",
//         country:"india"
//     }
// }
// let person2={
//     ...person1
// }
// person2.address.city="pune"
// console.log(person1);
// console.log(person2);

// // here shallow copy fail and make changes in both original and copy 




//-----------------now deep copy to make everything right in nested object and nested array while making copy..