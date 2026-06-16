// //// pattern question 
// ////  * * * * * 
// ////  * *   * * 
// ////  *   *   * 
// ////  * *   * * 
// ////  * * * * * 

// let n=5
// for(let i=1;i<=n;i++)
// {
//     let str=" "
//     for(let j=1;j<=n;j++)
//     {
//         if(i==1 || i==n || j==1 || j==n || i==j || i+j==n+1)
//         {
//             str+="* "
//         }
//         else{
//             str+="  "
//         }
//     }
// console.log(str);
// }


//// both are same 


// let n=7
// for(let row=1;row<=n;row++)
// {
//     let str=''
//     for(let col=1;col<=n;col++)
//     {
//         if(row==1 || row==n|| col==1|| col==n|| row==col||row+col== n+1)
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

//// patern question

//          * 
//        * * * 
//      * * * * * 
//    * * * * * * * 
//  * * * * * * * * * 

// let n=5
// let spaces=n-1   // this is the count of spaces in first line
// let star=1      // this is the count of spaces in first line

// for(let i=1;i<=n;i++)
// {
//     let str=" "

// for(let j=1;j<=spaces;j++)
// {
//     str+="  "
// }
// for(let k=1;k<=star;k++)
// {
//     str+="* "
// }
// console.log(str);
// star+=2     // this is becase each line star is increasing by 2 star
// spaces--    // this is because in each line spaces is decreasing by 1 so spaces--
// }


//// both are same 
 
// let n = 5 

// let spaces = n - 1 

// let stars = 1 

// for(let i = 1; i <= n; i++) 

// { 

//     let str = "" 

//     for(j = 1; j <= spaces; j++) 

//     { 

//         str += "  " 

//     } 
//     for(let k = 1; k <= stars; k++) 
//     { 
//         str += "* " 
//     } 
//     console.log(str) 
//     stars += 2 
//     spaces-- 
// } 


//-------------now hollow it-------------

//          * 
//        *   * 
//      *       * 
//    *           * 
//  * * * * * * * * * 


// let n=5
// let spaces=n-1   // this is the count of spaces in first line
// let star=1      // this is the count of spaces in first line

// for(let i=1;i<=n;i++)
// {
//     let str=" "

// for(let j=1;j<=spaces;j++)
// {
//     str+="  "
// }
// for(let k=1;k<=star;k++)
// {
//     if(i==n || k==1 || k==star)
//     {
//         str+="* "
//     }
//     else
//     {
//         str+="  "
//     }
// }
// console.log(str);
// star+=2     // this is becase each line star is increasing by 2 star
// spaces--    // this is because in each line spaces is decreasing by 1 so spaces--
// }

//// both are same
 
// let n = 5 
// let spaces = n - 1 
// let stars = 1 
// for(let i = 1; i <= n; i++) 
// { 
//     let str = "" 
//     for(j = 1; j <= spaces; j++) 
//     { 
//         str += "  " 
//     } 
//     for(let k = 1; k <= stars; k++) 
//     { 
//        if(i==n || k==1 || k==stars)
//        {
//          str += "* " 
//        }
//       else
//       {
//         str+="  "
//       }
//     } 
//     console.log(str) 
//     stars += 2 
//     spaces-- 
// } 

// now make another patern
//  * * * * * * * * * 
//    * * * * * * * 
//      * * * * * 
//        * * * 
//          * 

// let n=5
// let spaces=0  // this is the count of spaces in first line
// let star=2*n-1    // this is the count of star in first line

// for(let i=1;i<=n;i++)
// {
//     let str=" "

// for(let j=1;j<=spaces;j++)
// {
//     str+="  "
// }
// for(let k=1;k<=star;k++)
// {
    
//     {
//         str+="* "
//     }
    
// }
// console.log(str);
// star-=2    // this is becase each line star is increasing by 2 star
// spaces++    // this is because in each line spaces is decreasing by 1 so spaces--
// }


//// both are same....

// let n = 5 
// let spaces = 0
// let stars = 2*n-1

// for(let i = 1; i <= n; i++) 

// { 

//     let str = "" 

//     for(j = 1; j <= spaces; j++) 

//     { 

//         str += "  " 

//     } 
//     for(let k = 1; k <= stars; k++) 
//     { 
//         str += "* " 
//     } 
//     console.log(str) 
//     stars -= 2 
//     spaces++
// } 

//--------------now hollow it ----

//  * * * * * * * * * 
//    *           * 
//      *       * 
//        *   * 
//          * 

// let n=5
// let spaces=0  // this is the count of spaces in first line
// let star=2*n-1    // this is the count of star in first line

// for(let i=1;i<=n;i++)
// {
//     let str=" "

// for(let j=1;j<=spaces;j++)
// {
//     str+="  "
// }
// for(let k=1;k<=star;k++)
// {
//     if(i==1 || k==1 || k==star)
//     {
//         str+="* "
//     }
//     else
//     {
//         str+="  "
//     }
// }
// console.log(str);
// star-=2    // this is becase each line star is increasing by 2 star
// spaces++    // this is because in each line spaces is decreasing by 1 so spaces--
// }

//// both are same

// let n = 5 
// let spaces = 0
// let stars = 2*n-1
// for(let i = 1; i <= n; i++) 
// { 
//     let str = "" 
//     for(j = 1; j <= spaces; j++) 
//     { 
//         str += "  " 
//     } 
//     for(let k = 1; k <= stars; k++) 
//     { 
//        if(i==1 || k==1 || k==stars)
//        {
//          str += "* " 
//        }
//       else
//       {
//         str+="  "
//       }
//     } 
//     console.log(str) 
//     stars -= 2 
//     spaces++
// } 

// now make pattern like this

// * * * * * * * * * 
//   * * * * * * * 
//     * * * * * 
//       * * * 
//         * 
//       * * * 
//     * * * * * 
//   * * * * * * * 
// * * * * * * * * * 

// let n=9
// let spaces=0
// let stars=n
// for(let i=1;i<=n;i++)
// {
//     let str=""
    
//         for(let j=1;j<=spaces;j++)
//         {
//             str+="  "
//         }
//         for(let k=1;k<=stars;k++)
//         {
//             str+="* "
//         }
//         console.log(str);
//      if(i < n/2)
//      {
//         stars-=2
//         spaces++
//      }
//      else{
//         stars+=2
//         spaces--
//      }
// }


// now make pattern like this 
//       * 
//     * * * 
//   * * * * * 
// * * * * * * * 
//   * * * * * 
//     * * * 
//       * 
// let n=3
// let spaces=n
// let stars=1
// for(let i = 1; i <= 2 * n + 1; i++)
// {
//     let str = ""

//     for(let j = 1; j <= spaces; j++)
//     {
//         str += "  "
//     }

//     for(let k = 1; k <= stars; k++)
//     {
//         str += "* "
//     }

//     console.log(str)

//     if(i <= n)
//     {
//         stars+=2
//         spaces--
//     }
//     else
//     {
//         stars-=2
//         spaces++
//     }

// }


//// print pattern like this

//         * 
//        * *
//       * * * 
//      * * * * 
//     * * * * * 
//    * * * * * *
//   * * * * * * * 

//// assignment question start pattern

// let n=7

// for(let i=1;i<=n;i++)
// {
//     let str=""
//     for(let j=1;j<=n-i;j++)
//     {
//         str+=" "
//     }
//     for(let k=1;k<=i;k++)
//     {
//         str+="* "
//     }
//     console.log(str);
// }

//// both are same 
// let n=7
// for(let i=1;i<=n;i++)
// {
//     let str=""
//     for(let j=1;j<=n-i;j++)
//     {
//         str+=" "
//     }
//     for(let k=1;k<=i;k++)
//     {
//         str+="* "
//     }
//     console.log(str);
// }

// let n=2
// let star=1
// let spaces=n
// for(let i=1;i<=n;i++)
// {
//     let str=""
//     for(let j=1;j<=n;j++)
//     {
//         str+="  "
//     }
//     for(let k=1;k<=star;k++)
//     {
//         str+="* "
//     }
//     console.log(str);
//     if(i<=n/2)
//     {
//         spaces --
//         star+=2
//     }
//     else{
//         spaces++
//         star-=2
//     }
// }


