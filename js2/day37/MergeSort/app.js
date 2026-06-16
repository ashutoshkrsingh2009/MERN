
// // mergesort full
// function merge(a1,a2)
// {
//     let ans=[]
//     let i=0;
//     let j=0;
//     while(i<a1.length && j<a2.length)
//     {
//         if(a1[i]<=a2[j])
//         {
//             ans.push(a1[i])
//             i++
//         }
//         else
//         {
//             ans.push(a2[j])
//             j++
//         }
//     }
//     while(i<a1.length)
//     {
//         ans.push(a1[i])
//         i++
//     }
//     while(j<a2.length)
//     {
//         ans.push(a2[j])
//         j++
//     }
//     return ans

// }


// function mergesort(arr)
// {
//     if(arr.length==1 || arr.length==0)
//     {
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let left=mergesort(arr.slice(0,mid))
//     let right=mergesort(arr.slice(mid))
//     return merge(left,right)

// }
// console.log(mergesort([5,4,3,2,0,1]));


// // mergesort full
// function merge(a1,a2)
// {
//     let ans=[]
//     let i=0;
//     let j=0;
//     while(i<a1.length && j<a2.length)
//     {
//         if(a1[i]<=a2[j])
//         {
//             ans.push(a1[i])
//             i++
//         }
//         else
//         {
//             ans.push(a2[j])
//             j++
//         }
//     }
//     while(i<a1.length)
//     {
//         ans.push(a1[i])
//         i++
//     }
//     while(j<a2.length)
//     {
//         ans.push(a2[j])
//         j++
//     }
//     return ans

// }


// function mergesort(arr)
// {
//     if(arr.length==1 || arr.length==0)
//     {
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let left=mergesort(arr.slice(0,mid))
//     let right=mergesort(arr.slice(mid))
//     return merge(left,right)

// }
// console.log(mergesort([5,4,3,2,0,1]));

