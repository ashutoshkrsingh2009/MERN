////--------------merge sort----------//

// by normal----------------

// function quicksort(arr)
//     {
//      if(arr.length==0 || arr.length==1)
//      {
//         return arr
//      }
//       let pivot= arr[arr.length-1]
//       let left=[];
//       let right=[];

//       for(let i=0;i<arr.length-1;i++)
//       {
//          if(arr[i]<=pivot)
//          {
//             left.push(arr[i])
//          }
//          else
//          {
//             right.push(arr[i])
//          }
//       }
//       let sortedleft=quicksort(left)
//       let sortedright=quicksort(right)
//       return [...sortedleft,pivot,...sortedright]

//     }
//     console.log(quicksort([10,1,-4,-2,3,8,9,4,5]));
    
////////--------------optimized version-------------//
// function quicksort(arr)
// {
//     if(arr.length==0 || arr.length==1)
//     {
//         return arr
//     }
//     let pivotidx=Math.floor(Math.random()*arr.length)
//     let pivot=arr[pivotidx]
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length;i++)
//     {
//         if(i==pivotidx)continue
//         if(arr[i]<=pivot)
//         {
//             left.push(arr[i])
//         }
//         else
//         {
//             right.push(arr[i])
//         }
//     }
//       let sortedleft=quicksort(left)
//       let sortedright=quicksort(right)
//      return[...sortedleft,pivot,...sortedright]
// }
// console.log(quicksort([10,1,-4,-2,3,8,9,4,5]));

///revison by normal----------


// let arr=[10,1,-4,-2,3,8,9,4,5]
// function mergesort(arr)
// {
//     if(arr.length==0 || arr.length==1)
//     {
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length-1;i++)
//   {
//     if(arr[i]<pivot)
//     {
//         left.push(arr[i])
//     }
//     else
//     {
//         right.push(arr[i])
//     }
//   }
//   let sortedleft=mergesort(left)
//   let sortedright=mergesort(right)
//   return[...sortedleft,pivot,...sortedright]
// }
// console.log(mergesort(arr));


//////-------------optimized code ------------//

// // quicksort

//  let arr=[10,1,-4,-2,3,8,9,4,5]
// function quicksort(arr)
// {
//     if(arr.length==0 || arr.length==1)
//     {
//         return arr
//     }
//     let pivotidx=Math.floor(Math.random()*arr.length)
//     let pivot=arr[pivotidx]
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]==pivot)continue
//         if(arr[i]<=pivot)
//         {
//             left.push(arr[i])
//         }
//         else
//         {
//             right.push(arr[i])
//         }
//     }
//     let sortedleft=quicksort(left)
//     let sortedright=quicksort(right)
//     return[...sortedleft,pivot,...sortedright]
// }
// console.log(quicksort([10,1,-4,-2,3,8,9,4,5]));


