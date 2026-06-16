////------------map----------------

// let arr=[1,2,3,4,5]
// const ans=arr.map((item,index)=>{
//     return item ** 2
// })
// console.log(ans);

// let str=["hello","world"]
// const ans=str.map((item,index)=>{
//     return item.toUpperCase()
// })
// console.log(ans);

// let arr=[3,5,2]
// const ans=arr.map((item,index) =>{
//     return item+5
// })
// console.log(ans);


// let str=["hello","world"]
// const ans=str.map((item,index)=>{
//     return item.length
// })
// console.log(ans);


// let arr=[
//     {name:"ashu", age:23},
//     {name:"soheb", age:26},
//     {name:"ravi", age:22},
//     {name:"krish", age:4},
// ]
// const ans=arr.map((item,index)=>{
//     if(item.age>=18)
//     {
//         return true
//     }
//     else
//     {
//         return false
//     }
// })
// console.log(ans);

// let arr=[
//     {name:"ravi", age:22},
//     {name:"krish", age:4},
// ]
//  const ans=arr.map((item)=>{
//     return {
//         ...item,
//         isAdult:item.age>=18
//     }
//  })
//  console.log(ans);
 
// let arr=[
//     {first:"ravi", last:"singh"},
//     {first:"krish", last:" singh"},
// ]
//  const ans=arr.map((item,index)=>{
//   return item.first+ " "+ item.last
//  })
//  console.log(ans);
 

////-----------filter-----------
// let arr=[1,2,3,4,5,6,7,8]
// const ans=arr.filter((item,index)=>{
//  return item % 2==0
// })
// console.log(ans);

// let arr=[1,2,3,4,5,6,7,8]
// const ans=arr.filter((item,index)=>{
//  return item % 2 !=0
// })
// console.log(ans);

// let arr=[1,2,3,4,5,6,7,8,60,30,66,8]
// const ans=arr.filter((item,index)=>{
//  return item >10
// })
// console.log(ans);


// let arr=[
//     {name:"ravi", age:22},
//     {name:"krish", age:4},
//     {name:"ayush", age:28}
// ]
//  const ans=arr.filter((item)=>{
//     if(item.age>18)
//     {
//         return item
//     }
//  })
//  console.log(ans);


// let arr=["a","b","c","d","e","f"]
// const ans=arr.filter((item,index)=>{
//  return index % 2 !=0
// })
// console.log(ans);