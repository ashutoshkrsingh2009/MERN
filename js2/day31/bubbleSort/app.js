////-------------bubble sort-------------------//
// let arr=[5,4,3,2,1]
// for(let i=0;i<arr.length-1;i++)
// {
//     for(let j=0;j<arr.length-1;j++)
//     {
//         if(arr[j]>arr[j+1])
//         {
//             let temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//         }
//     }
// }
// console.log(arr);

// ////------------optimal case-----------------
// let arr=[5,4,3,2,1]
// for(let i=0;i<arr.length-1;i++)
   
// {
//     let issorted=true
//     for(let j=0;j<arr.length-1-i;j++)
//     {
//         if(arr[j]>arr[j+1])
//         {
//             let temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//             issorted=false
//         }

//     }
//             if(issorted==true)
//         {
//             break
//         }
// }
// console.log(arr);


// let arr=[
// {
//     name :"ashutosh",
//     age : 45
// },
// {
//     name :"asu",
//     age : 5
// },
// {
//     name :"rohit",
//     age : 4
// },
// {
//     name :"mohit",
//     age : 20
// },
// {
//     name :"sonu",
//     age : 1
// }
// ]
// for(let i=0;i<arr.length-1;i++)
   
// {
//     let issorted=true
//     for(let j=0;j<arr.length-1-i;j++)
//     {
//         if(arr[j].age>arr[j+1].age)
//         {
//             let temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//             issorted=false
//         }

//     }
//             if(issorted==true)
//         {
//             break
//         }
// }
// console.log(arr);
 

// let arr=[6,4,8,1,9,3,2,7,5]
// arr.sort((a,b)=>b-a)
// console.log(arr);


// let arr=[1,0,0,0,1,1,1,0,0]
// function Sorting01( arr) {
// let zero=0
// let one=0
// for(let item of arr)
// {
//   if(item==0)
//   {
//     zero++
//   }
//   else if(item==1)
//   {
//     one++
//   }
//   }

//   while(arr.length)
//   {
//     arr.pop()
//   }
//   for(let i=1;i<=zero;i++)
//   {
//     arr.push(0)
//   }
//     for(let i=1;i<=one;i++)
//   {
//     arr.push(1)
//   }
// return arr
//  }