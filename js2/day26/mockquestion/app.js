
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

// function print(n)
// {
//     if(n==0)
//     {
//         return 0
//     }
//     console.log(n)
//     print(n-1) 
// }
// print(10)

// let n=4
// for(let i=1;i<=n;i++)
// {
//     let str=""
//     for(let j=1;j<=n;j++)
//     {
//         if(i==1 || j==1 || i==n || j==n)
//         {
//             str+="* " 
//         }
//         else
//         {
//             str+="  "
//         }
        
//     }
//     console.log(str);  
// }

// let arr=[3,5,2,6,1]
// let target=2
// let start=0
// let end=arr.length-1
// let ans=-1
// while(start<end)
// {
//     let mid=Math.floor((start+end)/2)
//     if(arr[mid]==target)
//     {
//         ans=mid
//         break
//     }
//     else if(target>arr[mid])
//     {
//         start=mid+1
//     }
//     else
//     {
//         end=mid-1
//     }
// }
// console.log(ans);

// function print(n){
//     function helper(i){
//         if(i==n){
//             console.log(i);
//             return  
//         }
//         console.log(i);
//         helper(i+1) 
//     }
//     helper(1)
// }
// print(10)


// function print(n)
// {
//     if(n==1){
//         console.log(1);
//         return
//     }
//     print(n-1)
//     console.log(n);
// }
// print(10)

function abc(arr, ind=0)
 {
    if (ind==arr.length) {
        return 0
    }

   let count = arr[ind]<0 ? 1:0

    return count+ abc(arr,ind+1);
}

console.log(abc([1, 3, -4, -5],0));
