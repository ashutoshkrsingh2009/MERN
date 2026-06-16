// let arr=[[1,2],[3,4],[5,6]]
// newarr=arr[0]
// newarr.push(33)
// console.log(arr);
// console.log(newarr);
//// here 33 is pushed inside arr also so make it correct

// -------correct way 

// let arr=[[1,2],[3,4],[5,6]]
// newarr=[...arr[0]]
// newarr.push(33)
// console.log(arr);
// console.log(newarr);



//// -----------print each item in 2d array----------- 


// let arr=[[1,2,3],[4,5,6],[7,8,9]]
//// print all element :-1,2,3,4,5,,7,8,9

//// first by using for-of loop

// for(let item of arr)
// {
//     for(let val of item)
//     {
//         console.log(val); 
//     }
// }

//// now by using for-loop

// let arr=[[1,2,3],[4,5,6],[7,8,9]]
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr.length;j++)
//     {
//         console.log(arr[i][j])
//     }
// }

//// here for loop working good because inner and outer loop length is same 

// another arr  by for-0f-loop

// let arr=[[1,2,3],[4,5,6],[7,8,9,10,11,12,13,14,15]]
// for(let item of arr)
// {
//     for(let val of item)
//     {
//         console.log(val); 
//     }
// }
//// here also for-of-loop work 

//now by using for-loop

// let arr=[[1,2,3],[4,5,6],[7,8,9,10,11,12,13,14,15]]
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr.length;j++)
//     {
//         console.log(arr[i][j])
//     }
// }
/// here output is only till 9 because inner loop length is not same as outer loop so correct version is ....

// let arr=[[1,2,3],[4,5,6],[7,8,9,10,11,12,13,14,15]]

// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr[i].length;j++)
//     {
//         console.log(arr[i][j])
//     }
// }

// now working good .....



/// both are same but here is only correct way but in upper bith correct and wrong way

// let arr=[[1] ,[1,2] ,[1,2,3]]
// for(let item of arr)
// {
//     for(let num of item)
//     {
//         console.log(num);
        
//     }
// }

//// now by using for loop
// let arr=[[1] ,[1,2] ,[1,2,3]]
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr[i].length; j++)
//     {
//         console.log(arr[i][j]);
        
//     }
// }


//// both are same 

//  let arr=[[1] ,[1,2] ,[1,2,3]]
//  for(let i=0;i<arr.length;i++)
//  {
//     for(let j=0;j<arr[i].length;j++)
//     {
//         console.log(arr[i][j]);
//     }
//  }

//// now by using whle loop
// let arr=[[1] ,[1,2] ,[1,2,3]]
// let i=0
// while(i<arr.length)
// {
//     let j=0
//     while(j<arr[i].length)
//     {
//         console.log(arr[i][j]);
//         j++
        
//     }
//     i++
// }

//// user input in 1d array


// let size=Number(prompt("enter array size"))
// let arr=[]
// for(let i=0;i<=size;i++)
// {
//     arr.push(Number(prompt(`enter ${i+1} number`)))
// }
// console.log(arr);



//// both are same

// let size=Number(prompt("enter size of array"))
// let arr=[]
// for(let i=0;i<size;i++)
// {
//     arr.push(Number(prompt(` enter ${i+1} number`)))
// }
// console.log(arr);


//// user input in 2d array

// let row=Number(prompt("enter row size"))
// let col=Number(prompt("enter col size"))

// let arr=[]
// for(let i=0;i<row;i++)
// {
//   let innerarr=[]
//   for(let j=0;j<col;j++)
//   {
//      innerarr.push(Number(prompt(` enter row : ${i} , col : ${j} element`)))
//   }
//   arr.push(innerarr)
// }
// console.log(arr);

//// this code will only make same size nested array 


/////----this is more optimized---and work on every array size

// let row=Number(prompt("enter row size"))
// let arr=[]
// for(let i=0;i<row;i++)
// {
//   let col=Number(prompt("enter col size"))          ///// this line is important in previous wrtten at starting and now at inside loop...
//   let innerarr=[]
//   for(let j=0;j<col;j++)
//   {
//      innerarr.push(Number(prompt(` enter row : ${i} , col : ${j} element`)))
//   }
//   arr.push(innerarr)
// }
// console.log(arr);


// //// Both are same

// let row=Number(prompt("enter number of row"))

// let arr=[]
// for(let i=0;i<row;i++)
// {
//    let col=Number(prompt("enter number of col"))
//    let inner=[]
//    for(let j=0;j<col;j++)
//    {
//     inner.push(Number(prompt(` enter row : ${i} , col : ${j} element`)))
//    }
//    arr.push(inner)
// }
// console.log(arr);

//// find gretest and smallest elements in 2d array

// let arr=[
//     [1,44,-10,0],
//     [99,6,5,123],
//     [2,4,9,7]
// ]
// let max= -Infinity
// let min= +Infinity
// for(let item of arr)
// {
//     for(let num of item)
//     {
//         if(num>max)
//         {
//             max=num
//         }
//         if(num<min)
//         {
//             min=num
//         }
//     }
// }
// console.log(max,min);


//// reverse an array using two pointer
// let arr=[11,23,13,14,15]
// let start=0
// let end=arr.length-1
// while(start<end)
// {
//     let temp=arr[start]
//     arr[start]= arr[end]
//     arr[end]=temp
//     start++
//     end--
// }
// console.log(arr);

//// reverse 2d array

// let arr = [[1,2,3],[4,5,6],[7,8,9]] // [[3,2,1],[6,5,4],[9,8,7]]

// for(let item of arr)
// {
//     let start = 0
//     let end = item.length-1

//     while(start<end)
//     {
//         let temp = item[start] 
//         item[start] = item[end]
//         item[end] = temp
//         start++
//         end--
//     }
// }

// console.log(arr);

//// now print array coloum wize

// let arr=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr[i].length;j++)
//     {
//         console.log(arr[j][i])
//     }
// }
//// this will work only when all array size is same 

//// correct way 
//// this will work on every array size

let arr=[[6,1],[1,2,3],[4,5]]
let longestarr=-Infinity
for(let item of arr)
{
    longestarr=Math.max(longestarr,item.length)
}
for(let i=0;i<longestarr;i++)
{
    for(let j=0;j<arr.length;j++)
    {
        if(arr[j][i]==undefined) continue
        console.log(arr[j][i]);
        
    }
}


