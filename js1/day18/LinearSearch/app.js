// ---------linear search------
//---------by using normal------

// let arr=[999,10,-5,16,4,6]
// let target=6
// let ans=-1
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]==target)
//     {
//         ans=i
//         break
//     }
// }
// console.log(ans);

//-----LINEAR SEARCH BY USING FUNCTION------//


//  let arr=[1,3,2,5,8,55,35,78,355]
//  let target=7
//  function linearsearch(arr,target)
//  {
//     let ans=-1
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]==target)
//         {
//             ans=i
//         }
//     }
//     return ans
//  }
// console.log(linearsearch(arr,target));

// ------both are same-----//


// // same thngs by using function

// // function linearsearch(arr,target)
// // {
// //     let ans=-1
// //     for(let i=0;i<arr.length;i++)
// //     {
// //         if(arr[i]==target)
// //         {
// //             ans=i
// //             break
// //         }
// //     }
// //     return ans
// // }
// // console.log(linearsearch(1,2,3,4,5,),4);





// let arr = [999, 10, -5, 16, 4, 6]
// let target = 6

// let ans = -1

// for(let i = 0; i < arr.length; i++)
// {
//     if(arr[i] == target)
//     {
//         ans = i
//         break
//     }

// }

// console.log(ans)


// function linearSearch(arr, target)
// {
//     let ans = -1

//     for(let i = 0; i < arr.length ; i++)
//     {
//         if(arr[i] == target)
//         {
//             ans = i
//             break
//         }
//     }

//     return ans

// }

// console.log(linearSearch([101,2,-3,4,5,16], 16))

// function linearSearch2(arr, x)
// {
//     for(let i = 0; i < arr.length; i++)
//     {
//         if(arr[i] == x)
//         {
//             return true
//         }
//     }
//     return false
// }


// console.log(linearSearch2([1,2,3,4,5], 1))


//-----leetcode uestion 412 fizzbuzz-------//


// function abc(n)
// {
//     let str=[]

//     for(let i=0;i<=n;i++)
//  {
//     if(i%3==0 && i%5==0)
//     {
//          str.push("FizzBuzz")
//     }
//     else if(i%3==0)
//     {
//          str.push('Fizz')
//     }
//     else if(i%5==0)
//     {
//          str.push("Buzz")
//     }
//     else
//     {
//         //  str.push(i.toString())
//           str.push(String(i))
//     }
//  }
//  return str
// }
// console.log(abc(5));



//------ by using for of loop -------//

// function findObject(arr, targetId)
// {
//     // for(let item of arr)
//     // {
//     //     if(item.id == targetId)
//     //     {
//     //         return item
//     //     }
//     // }
//     for(let i = 0; i < arr.length; i++)
//     {
//         if(arr[i].id == targetId)
//         {
//             return arr[i]
//         }
//     }
//     return {}
// }
// const users = [
//     {id: 1, name: "Aman"},
//     {id: 2, name: "Riya"},
//     {id: 3, name: "Shubham"},
//     {id: 4, name: "Neha"}
// ];
// console.log(findObject(users, 4))


//---------by using for loop upper question

// function findObject(arr, targetId)
// {
//     for(let item of arr)
//     {
//         if(item.id == targetId)
//         {
//             return item
//         }
//     }
//     for(let i = 0; i < arr.length; i++)
//     {
//         if(arr[i].id == targetId)
//         {
//             return arr[i]
//         }
//     }
//     return {}
// }

// const users = [
//     {id: 1, name: "Aman"},
//     {id: 2, name: "Riya"},
//     {id: 3, name: "Shubham"},
//     {id: 4, name: "Neha"}
// ];
// console.log(findObject(users, 1))


// function findcity(arr,targecity)
// {
//     ans=[]
//     for(let item of arr)
//     {
//         if(item.city==targecity)
//         {
//             ans.push(item.name)
//         }
//     }
//     return ans
// }
// const users = [
//   {id: 1, name: "Aman", city: "Delhi"},
//   {id: 2, name: "Riya", city: "Mumbai"},
//   {id: 3, name: "Karan", city: "Delhi"},
//   {id: 4, name: "Neha", city: "Pune"}
// ];
// console.log(findcity(users,"Delhi"));


//-----BOTH SAME 


// function findNames(arr, city)
// {
//     let ans = []

//     for(let item of arr)
//     {
//         if(item.city == city)
//         {
//             ans.push(item.name)
//         }
//     }

//     return ans
// }

// const users = [
//   {id: 1, name: "Aman", city: "Delhi"},
//   {id: 2, name: "Riya", city: "Mumbai"},
//   {id: 3, name: "Karan", city: "Delhi"},
//   {id: 4, name: "Neha", city: "Pune"}
// ];

// console.log(findNames(users, "Delhi")) // ["Aman", "Karan"]

//   const products = [
//   { id: 1, name: "Mouse", price: 500 },
//   { id: 2, name: "Keyboard", price: 1500 },
//   { id: 3, name: "Monitor", price: 12000 },
//   { id: 4, name: "iPhone", price: 80000 },
//   { id: 5, name: "Laptop", price: 6000 },
//   { id: 6, name: "Tablet", price: 200000 }
// ];

// function findproducts(arr,targetprice)
// {
//     for(let item of arr)
//     {
//         if(item.price > targetprice)
//         {
//             return item
//         }
//     }
//     return []
// }
// console.log(findproducts(products,50000));




//// both are same ------------------



// function firstExpensiveProduct(arr)
// {
//     for(let item of arr)
//     {
//         if(item.price > 50000)
//         {
//             return item
//         }
//     }

//     return {}
// }

// const products = [
//   { id: 1, name: "Mouse", price: 500 },
//   { id: 2, name: "Keyboard", price: 1500 },
//   { id: 3, name: "Monitor", price: 12000 },
//   { id: 4, name: "iPhone", price: 8000 },
//   { id: 5, name: "Laptop", price: 6000 },
//   { id: 6, name: "Tablet", price: 20000 }
// ];

// console.log(firstExpensiveProduct(products))


// const users1 = [
//  {id:1, name:"Aman", age:26, city:"Delhi"},
//  {id:2, name:"Riya", age:28, city:"Mumbai"},
//  {id:3, name:"Karan", age:30, city:"Delhi"}
// ];

// function findObj(arr)
// {  let ans=[]
//     for(let item of arr)
//     {
//         if(item.age>25 && item.city=="Delhi")
//         {
//             ans.push(item)
//         }
//     }
//   return ans
// }
// console.log(findObj(users1));



// function findUser(arr)
// {
//     let ans = []

//     for(let item of arr)
//     {
//         if(item.age > 25 && item.city == "Delhi")
//         {
//             ans.push(item)
//         }
//     }

//     return ans
// }

// const users1 = [
//  {id:1, name:"Aman", age:26, city:"Delhi"},
//  {id:2, name:"Riya", age:28, city:"Mumbai"},
//  {id:3, name:"Karan", age:30, city:"Delhi"}
// ];

// console.log(findUser(users1))







// const items = [
//  {id:1, name:"TV", category:"electronics"},
//  {id:2, name:"Shirt", category:"clothing"},
//  {id:3, name:"Phone", category:"electronics"},
//  {id:4, name:"Laptop", category:"electronics"}
// ];
//  function lastItem(arr)
// {
//     for(let i = arr.length - 1; i >= 0; i--)
//     {
//         if(arr[i].category == "electronics")
//         {
//             return arr[i]
//         }
//         return{}
//     }
// }

// console.log(lastItem(items))

// const items = [
//  {id:1, name:"TV", category:"electronics"},
//  {id:2, name:"Shirt", category:"clothing"},
//  {id:3, name:"Phone", category:"electronics"},
//  {id:4, name:"Laptop", category:"electronics"}
// ];
//  function lastItem(arr)
// {
//     let ans = {}

//     for(let item of arr)
//     {
//         if(item.category == "electronics")
//         {
//             ans = item
//             // break
//         }
//     }

//     return ans
// }

// console.log(lastItem(items))




// const productss = [
//   { id: 1, name: "iPhone", price: 80000 },
//   { id: 2, name: "Laptop", price: 65000 },
//   { id: 3, name: "Headphones", price: 3000 },
//   { id: 4, name: "Monitor", price: 12000 },
//   { id: 5, name: "Keyboard", price: 2000 },
//   { id: 6, name: "Smart Watch", price: 15000 }
// ];

// function solve(arr)
// {
//     let sum = 0
//     let cheapest = arr[0]
//     let expensive = arr[0]

//     for(let item of arr)
//     {
//         sum += item.price
        
//         if(item.price < cheapest.price)
//         {
//             cheapest = item
//         }

//         if(item.price > expensive.price)
//         {
//             expensive = item
//         }
//     }


//     return {
//         cheapestProduct : cheapest.name,
//         mostExpensiveProduct : expensive.name,
//         totalPrice : sum,
//         averagePrice : (sum / arr.length)
//     }
// console.log(solve(productss))
