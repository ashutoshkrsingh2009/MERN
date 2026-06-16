////----------Assigment question 10th march------------//

////----------------sum of 2d array----------------

////----------------by using for-of-loop-------------
// let arr=[
//     [1,2,3,4],
//     [5,6,7,8,9]
// ]

// let sum=0
// for(let item of arr)
// {
//     for(let val of item)
//     {
//         sum+=val
//     }
// }
// console.log(sum);

////----------------- by using for-loop-------

// let arr=[
//     [1,2,3,4],
//     [5,6,7,8,9]
// ]

// let sum=0
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr[i].length;j++)
//     {
//         sum+=arr[i][j]
//     }
// }
// console.log(sum);

//// ---------transpose of array ----// row to colum and colum to row---
// let arr=[[1,2,5,9],[3,4,8,6]]
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<i;j++)  ////here j<i tak loop chal raha hai ye important hai isko remember rakhna hai 
//     {
//         let temp=arr[i][j]
//         arr[i][j]=arr[j][i]
//         arr[j][i]=temp
//     }
// }
// console.log(arr);

//// maximun in 2d array

// let arr=[
//     [1,2,3,4],
//     [5,6,7,8]
// ]
// let max=-Infinity
// for(let item of arr)
// {
//     for(let value of item)
//     {
//         if(value>max)
//         {
//             max=value
//         }
//     }
// }
// console.log(max);

//// by inbuild method Math.max

// let arr=[
//     [1,2,3,4],
//     [5,6,7,8]
// ]
// for(let item of arr)
// {
//     for(let value of item)
//     {
//      max=Math.max(value)
//     }
// }
// console.log(max);

//// print coloum wize

// let arr=[
// [1 ,2 ,3],
// [4 ,5, 6],
// [7 ,8, 9],
// ]

//   let str=""
//   for(let i = 0 ; i<arr.length;i++)
//   {
//     for(let j = 0 ; j<arr.length;j++)
//     {
//       str+=(arr[j][i]) + " "
//     }
//   }
// console.log(str)

//// ------fill row in boolean matrix
// let arr=[
//     [1,0,0,0],
//     [0,0,0,0],
//     [0,1,0,0],
//     [0,0,0,0]
// ]
// for(let item of arr)
// {
//     let isonepresent=item.includes(1)
//     if(isonepresent==true)
//     {
//         for(let i=0;i<item.length;i++)
//         {
//             item[i]=1
//         }
//     }
// }
// console.log(arr);

//// Student Sorted Array
// let arr=[
//     ["raju","a"],
//     ["mohan","b"],
//     ["ashu","a"],
//     ["aayush","c"]
// ]
// let ans=[]
// for(let item of arr)
// {
//   ans.push(item[0])
// }
// ans.sort()
// console.log(ans);




