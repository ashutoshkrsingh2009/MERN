////-------------------nested loop----------------------
////-----------------use of single loop-----------------
//// take user input and print table of that input
// let n=parseInt(prompt("enter value of n"))
// for(let i=1;i<=10;i++)
// {
//    console.log(`${n} * ${i} = ${n*i}`); 
// }
 
////---------both are same

// let n=Number(prompt("enter your number"))
// for(let i=1;i<=10;i++)
// {
//     console.log(n+"x"+i+"="+ n*i);
// }


//---------------print start in formate [* * * * *]---------------------
////this is initial thinking

// let n=5
// for(let i=1;i<=n;i++)
// {
//    console.log("*");
// }
//// here printing 5 star but in dffrent line so i have to make it correct by making one empty string ""

// let n=5
// let ans=""
// for(let i=1;i<=n;i++)
// {
//    ans+="* "
// }
// console.log(ans);

////-----both are same

// let n=5
// let ans=""
// for(let i=1;i<=n;i++)
// {
//     ans+=('* ')
// }
// console.log(ans);





// --------given 4 person and give 1,2,3 unit to everyone----------
// let unit=3
// let person=4
// for(let i=1;i<=person;i++)
// {
//    for(let j=1;j<=unit;j++)
//    {
//       console.log(`person ${i} :unit ${j}`);
//    }
// }

////--------both are same 

// let person =4
// for(let i=1;i<=person;i++)
// {
//     for(let j=1;j<=3;j++)
//     {
//         console.log(`person:${i}  unit:${j}`);
//     }
// }


//-------table from 1 to 100---------

// for(let i=1;i<=100;i++)
// {
//    for(let j=1;j<=10;j++)
//    {
//       console.log(`${i} * ${j} = ${i*j}`);
//    }
// }

// both are same

// for(let j=1;j<=100;j++)
// { 
//     for(let i=1;i<=10;i++)
//     {
//         console.log(`${j} * ${i} = ${j*i}`);
        
//     }
// }

//------- now by taking user input----------

// let start=Number(prompt("enter start number"))
// let end=Number(prompt("enter end number"))
// for(let i=start;i<=end;i++)
// {
//    for(let j=1;j<=10;j++)
//    {
//       console.log(`${i} * ${j} = ${i*j}`);
//    }
// }

////----both are same

// let start=Number(prompt("enter start number"))
// let end=Number(prompt("enter end number"))

// for (let i=start;i<=end;i++)
// {
//     for(let j=1;j<=10;j++)
//     {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

// ---------------both are same--------------

// let start=Number(prompt("enter start number"))
// let end=Number(prompt("enter end number"))

// for(let i=start; i<=end; i++)
// {
//     for(let j=1; j<=10; j++)
//     {
//         console.log(`${i} x ${j} = ${i*j}`);
//     }
// }

//----------------now subarray -------------
//-------------this is only one sub array-----

// let arr=[1,2,3,4,5]
// let start=1
// let end=4
// let subarray=[]
// for(let i=start;i<=end;i++)
// {
//     subarray.push(arr[i])
// }
// console.log(subarray);

//------------all subarray --------------

// let arr=[1,2,3,4]
// for(let i=0;i<=arr.length-1;i++)
// {
//    let subarray=[]
//    for(let j=i;j<=arr.length-1;j++)
//    {
//       subarray.push(arr[j])
//       console.log(subarray);
//    }
// }

////--- same----

// let arr=[1,2,3]
// for(let i=0;i<arr.length;i++)
// {
//     let ans=[]
//       for(let j=i;j<arr.length;j++)
//         {
//             ans.push(arr[j])
//             console.log(ans);
//         }
    
// }

//----both are same----

// let arr=[1,2,3]
// for(let i=0;i<=arr.length;i++)
// {
//     let ans=[]
//     for(let j=i;j<arr.length;j++)
//     {
//         ans.push(arr[i])
//     }
// }
// console.log(ans);

////-----------sub-string-------//
////-----------print substring from index 2 to 5---------
// let str="ashutosh"
// let start=2
// let end=4
// let substring=""
// for(let i=start;i<=end;i++)
// {
//    substring+=str[i]
// }
// console.log(substring);

////------now print all substring----

// let str="ashutosh"
// for(let i=0;i<=str.length-1;i++)
// {
//    let substring=""
//    for(let j=i;j<=str.length-1;j++)
//    {
//       substring+=str[j]
//       console.log(substring);
//    }
// }

////both are same 

// //----------------all substring--------
// let str="ashu"
// for(let i=0;i<str.length;i++)
// {
//     let newstr=""
//     for(let j=i;j<str.length;j++)
//     {
//         newstr+=str[j]
//         console.log(newstr);
        
//     }
// }



////------------------------pattern question ------------------------------
   ////  * * * * *
   ////  * * * * *
   ////  * * * * *
   ////  * * * * *
   ////  * * * * *

   ///// make pattern like this square

// let n=9
// for(let j=1;j<=n;j++)
// {
//    let ans=""
//    for(let i=1;i<=n;i++)
//   {
//    ans+="* "
//   }
// console.log(ans);
// }

///// make pattern like this rectangle

////  * * * * * * *
////  * * * * * * *
////  * * * * * * *
////  * * * * * * *
////  * * * * * * *

// let n=5
// let m=7
// for(let i=1;i<=n;i++)
// {
//    let str=""
//    for(let j=1;j<=m;j++)
//    {
//       str+="* "
//    }
//    console.log(str);
// }


///// make pattern like this right-angle triangle

////  * 
////  * * 
////  * * * 
////  * * * * 
////  * * * * * 


// let row=5
// for(let i=1;i<=row;i++)
// {
//    let str=""
//    for(let j=1;j<=i;j++)
//    {
//       str+="* "
//    }
//    console.log(str);
// }


///// make pattern like this right-angle triangle

////  * * * *
////  * * *
////  * *  
////  * 

// let n=4
// for(let i=1;i<=n;i++)
// {
//    let str=""
//    for(let j=1;j<=n-i+1;j++)
//    {
//       str+="* "
//    }
//    console.log(str);
// }



   ////  *  * *  *
   ////  *       *
   ////  *       *
   ////  * * * * *

   ///// make pattern like this square

   // let n=4
   // for(let i=1;i<=n;i++)
   // {
   //    let str=""
   //    for(let j=1;j<=n;j++)
   //    {
   //       if(i==1 || i==n || j==1 || j==n)
   //       {
   //          str+="* "
   //       }
   //       else
   //       {
   //          str+="  "
   //       }
   //    }
   //    console.log(str);
   // }


   ///// make pattern like this right-angle triangle

////  * 
////  * * 
////  *    * 
////  *     * 
////  *       * 
////  * * * * * *
// let n=5
// for(let i=1;i<=n;i++)
// {
//    let str=""
//    for(let j=1;j<=i;j++)
//    {
//       if(i==n || j==1 || j==i)
//       {
//          str+="* "
//       }
//       else{
//          str+="   "
//       }
//    }
//    console.log(str);
   
// }

//// now print pattern like this 

////         *
////       * *
////     * * *
////   * * * *
//// * * * * *

// let n =5
// for(let i=1;i<=n;i++)
// {
//    let str=""
//    for(let j=1;j<=n-i;j++)
//    {
//       str+="  "
//    }
//    for(let k=1;k<=i;k++)
//    {
//       str+="* "
//    }
//    console.log(str);
// }