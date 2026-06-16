////------find sum of 2d array----------------
// let arr=[[1,2,3,],[4,5,6,7]]
// let sum=0
// for(let item of arr)
// {
//     for(let val of item)
//     {
//         sum=sum+val
        
//     }
    
// }
// console.log(sum);


////---------Fill Rows in Boolean Matrix----------
// let arr=[[0,0,0,0,0],[0,1,0,0,0],[0,0,0,0,0],[1,0,0,0,0]]
// for(let item of arr)
// {
//    let isone=item.includes(1)
//     if(isone==true)
//     {
//         for(let i=0;i<item.length;i++)
//         {
//             item[i]=1
//         }
//     }
// }
// console.log(arr);

//// let code question but no completed accordng to leetcode 


// let arr=[2,4,4,3,5,6]
// let target=6
// for(let i=0;i<arr.length-1;i++)
// {
//     if(arr[i] + arr[i+1]==target)
//     {
//         console.log([i,i+1]);
//     }
// }

/////----------------star pattern practice by chattgpt------------//
// *
// **
// ***
// ****
// *****
// make pattern like this

// let n=5
// for(let i=1;i<=n;i++)
// {
//     let str=""
//     for(let j=1;j<=i;j++)
//     {
//         str+="* "
//     }
//     console.log(str); 
// }

//// now make like this
// *****
// ****
// ***
// **
// *

// let n=5
// for(let i=0;i<=n;i++)
// {
//     let str=""
//     for(let j=1;j<=n-i;j++)
//     {
//         str+="* "
//     }
//     console.log(str);
// }

////print like this
// *
// * *
// * * *
// * * * *
// * * * * *

// let n=5
// for(let i=1;i<=n;i++)
// {
//     let str=""
//     for(let j=1;j<=i;j++)
//     {
//         str+="*  "
//     }
//     console.log(str); 
// }

//// make like this
// * * * * *
// * * * *
// * * *
// * *
// *

// let n=5
// for(let i=0;i<=n;i++)
// {
//     let str=""
//     for(let j=1;j<=n-i;j++)
//     {
//         str+="*  "
//     }
//     console.log(str);
// }

//// now make like this

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// let n=5
// for(let i=1;i<=n;i++)
// {
//     let str=""
//     for(let j=1;j<=n;j++)
//     {
//         str+="* "
//     }
//     console.log(str); 
// }

//// now make pattern like this
//     *
//    **
//   ***
//  ****
// *****
// let n=5
// for(let i=1;i<=n;i++)
// {
//     let str=""
//     for(let j=1;j<=n-i;j++)
//     {
//         str+=" "
//     }
//     for(let k=1;k<=i;k++)
//     {
//         str+="*"
//     }
//     console.log(str);
// }

//// now like this
//     *
//    * *
//   * * *
//  * * * *
// * * * * *

// let n=5
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

//// make pattern like his
// *****
//  ****
//   ***
//    **
//     *

// let n=5
// for(let i=0;i<n;i++)
// {
//     let str=""
//     for(let j=1;j<=i;j++)
//     {
//         str+="  "
//     }
//     for(let k=1;k<=n-i;k++)
//     {
//         str+="* "
//     }
//     console.log(str);
    
// }

//// now make pattern like this
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

// let n=5
// for(let i=0;i<n;i++)
// {
//     let str=""
//     for(let j=1;j<=i;j++)
//     {
//         str+=" "
//     }
//     for(let k=1;k<=n-i;k++)
//     {
//         str+="*  "
//     }
//     console.log(str);
    
// }

//// now make pattern like this
//     *
//    ***
//   *****
//  *******
// *********
// let n=5
// let star=1
// for(let i=1;i<=n;i++)
// {
//     let str=""
//     for(let j=1;j<=n-i;j++)
//     {
//         str+=" "
//     }
//     for(let k=1;k<=star;k++)
//     {
//         str+="*"
//     }
//     console.log(str);
//     star+=2
// }

//// now make pattern like this
// *********
//  *******
//   *****
//    ***
//     *

// let n=5
// let star=2*n-1
// space=0
// for(let i=1;i<=n;i++)
// {
//     let str=""
//     for(let j=1;j<=space;j++)
//     {
//         str+=" "
//     }
//     for(let k=1;k<=star;k++)
//     {
//         str+="*"
//     }
//     console.log(str);
//     space++
//     star-=2
// }

////now make pattern like this 

//     *
//    ***
//   *****
//    ***
//     *

// let n=2
// let star=1
// let space=n
// for(let i=1;i<=2*n+1;i++)
// {
//     let str=""
//     for(let j=1;j<=space;j++)
//     {
//         str+=" "
//     }
//     for(let k=1;k<=star;k++)
//     {
//         str+="*"
//     }
//     console.log(str);
//     if(i<=n)                 //// this is important concept
//     {
//         star+=2
//         space--
//     }
//     else{
//         star-=2
//         space++
//     }
// }

//// now make pattern like this
// *
// ***
// *****
// *******
// *********

// let n=5
// let star=1
// let spaces=2*n-1
// for(let i=1;i<=n;i++)
// {
//     let str=""
//     for(let j=1;j<=star;j++)
//     {
//         str+="*"
//     }
//     for(let k=1;k<=spaces;k++)
//     {
//         str+=" "
//     }
//     console.log(str);
//     star+=2
//     spaces-=2
// }

//// now make pattern like this

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// let n=5
// let star=1
// let spaces=n-1
// for(let i=1;i<=2*n-1;i++)
// {
//     let str=""
//     for(let j=1;j<=spaces;j++)
//     {
//         str+=" "
//     }
//     for(let k=1;k<=star;k++)
//     {
//         str+="*"
//     }
//     console.log(str);
//     if(i<n)
//     {
//         star+=2
//         spaces--
//     }
//     else
//     {
//         star-=2
//         spaces++
//     }
    
// }

////make pattern like this

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// let n=5
// let space=n-1
// let star=1
// for(let i=1;i<=2*n-1;i++)
// {
//     let str=""
//     for(let j=1;j<=star;j++)
//     {
//         str+="*"
//     }
//     for(let k=1;k<=space;k++)
//     {
//         str+=" "
//     }
//     console.log(str);
//     if(i<=n)
//     {
//         star++
//         space--
//     }
//     else
//     {
//         star--
//         space++
//     }
    
// }

//// now make pattern like this

//     *
//    * *
//   * * *
//  * * * *
//   * * *
//    * *
//     *

// let n=4;
// let star=1
// for(let i=1;i<=2*n-1;i++)
// {
//     let str=" "

// for(let j=1;j<star;j++)
// {
//     str+="* "
// }
// console.log(str);
// if(i<=n)
// {
//     star++
// }
// else{
//     star--
// }

// }

///// this is wrong so will do latter

// let n=4 
// for(let i=1;i<=n;i++)
// {
//   let str=""
//   for(let j=1;j<=n;j++)
//   {
//     if(i==1 || j==1||i==n||j==n)
//     {
//       str+="* "
//     }
//     else
//     {
//       str+="  "
//     }
//   }
//   console.log(str);
  
// }

//// another question

// let n=4
// for(let i=0;i<=n;i++)
// {
//     let str= " "
//     for(let k=1;k<=n-i;k++)
//     {
//         str+=" "
//     }
//     for(let j=1;j<=i;j++)
//     {
//         str+="#"
//     }
// console.log(str);
// }


////----------------2d-array practice---------------------

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

////-------------linear search -----------
// let arr=[1,2,6,-110,99,55,83]
// let target=99
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]==target)
//     {
//         console.log(i)
//     }
// }              //// this is not optimized code and crash when target is not present

//// now new code 

// let arr=[1,2,6,-110,99,55,83]
// let target=9
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

//// now if more then one target are available in arr then print all index of target
// let arr=[1,2,1,99,1,55,1]
// let target=1

// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]==target)
//     {

//         console.log(i); 
//     }
// }


////-------------binary search----------------//

// // binary search
// let arr=[1,2,3,4,5,6]
// let target=4
// let s=0
// let e=arr.length-1
// let ans=-1

//  while(s<=e)
//  {
//     let mid=Math.floor((s+e)/2)
//     if(arr[mid]==target)
//     {
//         ans=mid
//         break
//     }
//     else if(target>arr[mid])
//     {
//         s=mid+1
//     }
//     else
//     {
//         e=mid-1
//     }
//  }
// console.log(ans);

//// decending order 

// let arr=[6,5,4,3,2,1]
// let target=1
// let s=0
// let e=arr.length-1
// let ans=-1

//  while(s<=e)
//  {
//     let mid=Math.floor((s+e)/2)
//     if(arr[mid]==target)
//     {
//         ans=mid
//         break
//     }
//     else if(target<arr[mid])
//     {
//         s=mid+1
//     }
//     else
//     {
//         e=mid-1
//     }
//  }
// console.log(ans);

////--------------higher order function--------------////
///---------------now normal function----------------////

// function abc()
// {
//     console.log("hello baccho");
// }
// abc()

////-------------- now use parameter and argument----

// function abc(name,age)
// {
//     console.log(`Hello my name is ${name}  and my age is ${age}`);
// }
// abc("ashu",25)

////--------------now use return keyword----------//

// function abc(name,age)
// {
//     console.log(`Hello my name is ${name}  and my age is ${age}`);
//     return "i love coding"
// }
// console.log(abc("ashu",25))

////---------annother example----------
// function abc(a,b)
// {
//     return a+b
// }
// console.log(abc(2,3));

////-----------function can returned function also

// function hof()
// {
//     return ()=>{
//        console.log("hello from returned function")
//     }
// }
// hof()()

////-----------function can accept function as parameter------

// function abc(cb)
// {
//     cb()
// }
// abc(()=>{console.log("hello from parameter fn");
// })

////------------------map function ---------

//// map can be used on array----------

//// q- given an array and return new arr where square of all element in array is store in new array

////-----normally by loop 

// let arr=[1,2,3,4,5]
// let newArr=[]
// for(let i=0;i<arr.length;i++)
// {
//     newArr.push(arr[i]*arr[i])
// }
// console.log(arr);
// console.log(newArr);

////-------now same things by map method or function

// let arr=[1,2,3,4,5]
// const newArr=arr.map((item,index)=>{
//     return item*item
// })
// console.log(arr);
// console.log(newArr);

////-------------question on map ----------------//

//// convert into uppercase

// let arr=["hello","world"]
// const newArr=arr.map((item,index)=>{
//     return item.toUpperCase()
// })
// console.log(newArr);


//// add 5 to each array item

// let arr=[10,11,12,13,14,15]
// const newArr=arr.map((item,index)=>{
//     return item +5
// })
// console.log(newArr);

//// convert number into string format

// let arr=[1,2,3,4]
// const newArr=arr.map((item,index)=>{
//     return item.toString()
// })
// console.log(newArr);

//// length of each item

// let arr=["apple","banana","kiwi"]
// const newArr=arr.map((item,index)=>{
//     return item.length
// })
// console.log(newArr);

//// given an array of object return array of name only

// let arr=[
//     {name:"ashu", age:23},
//     {name:"soheb", age:26},
//     {name:"ravi", age:22},
//     {name:"krish", age:4},
// ]
// const newArr=arr.map((item,index)=>{
//     return item.name
// })
// console.log(newArr);

//// --------------filter--------------//

// let arr=[1,2,3,4,5,6,7,8]
// //// print all even element

// const newArr=arr.filter((item,index)=>{
//     return item %2==0
// })
// console.log(newArr);

// let arr=[1,2,3,4,5,6,7,8]
// //// print all odd element

// const newArr=arr.filter((item,index)=>{
//     return item %2!=0
// })
// console.log(newArr);

////Q return number greter than 10

// let arr=[5,12,8,20,3]
// const newArr=arr.filter((item,index)=>{
//     return item>10
// })
// console.log(newArr);

////q.....print age greter than 18

// let arr=[
//     {name:"ravi", age:22},
//     {name:"krish", age:4},
//     {name:"ayush", age:28}
// ]
//  const newArr=arr.filter((item,index)=>{
//     return item.age>18
//  })
//  console.log(newArr);


// let arr=[
//     {task:"study", done:true},
//     {task:"workout", done:false},
//     {task:"code", done:true}
// ]
//  const newArr=arr.filter((item,index)=>{
//     return item.done
//  })
//  console.log(newArr);

//// return users whose email contain "gmail"

// let arr=[
//     {email :"a@gmail.com"},
//     {email :"a@yahoo.com"},
//     {email :"a@gmail.com"}
// ]
// const newArr=arr.filter((item,index)=>{
//     return item.email.includes("gmail")
// })
//  console.log(newArr);

//// return element at even indices

// let arr=["a","b","c","d","e","f"]
// const newArr=arr.filter((item,index)=>{
//     return index %2==0
// })
// console.log(newArr);

////------------------reduce method question----------------////

//// Q-print sum of all element in array

// let arr=[1,2,3,4,5,6,7,8,9,10]
// const newarr=arr.reduce((prev,curr)=>{
//     return prev + curr
// })
// console.log(newarr);

//// here output s right if we don't pass initial value because we have to do sum and initial value is 1 

// let arr=[2,3,4]


// let newarr=arr.reduce((prev,curr)=>{
//     return prev * curr
// })
// console.log(newarr);

//// find maximum number in arr 
// let arr=[77,1,9,3]
// const newarr=arr.reduce((prev,curr)=>{
//     return Math.max(prev,curr)
// },0)
// console.log(newarr);

//// find maximum number in arr 
// let arr=[77,1,9,3]
// const min=arr.reduce((prev,curr)=>{
//     return Math.min(prev,curr)
// })
// console.log(min);

//// count total element

// let arr=["a","b","c"]
// let count=arr.reduce((prev,curr)=>{
//     return prev +1

// },0)
// console.log(count);

//// count occurance of elements

// let arr=["a","b","c","a","b","a"]
// let newArr=arr.reduce((prev,curr)=>{
//     if(prev.hasOwnProperty(curr))
//     {
//         prev[curr]=prev[curr] +1
//     }
//     else
//     {
//         prev[curr] =1
//     }
//     return prev
// },{})
// console.log(newArr);

//// flatten an array
// let arr=[[1,2],[3,4],[5]]

// const newarr=arr.reduce((prev,curr)=>{
//    return [...prev,...curr]
// })
// console.log(newarr);

//// convert array to object

// let arr=["name","age"]
// let newarr=arr.reduce((prev,curr)=>{
//     prev[curr]=null
//     return prev
// },{})
// console.log(newarr);

//// store odd and even seperate


// let arr=[1,2,3,4,5]
// let newarr = arr.reduce((prev,curr)=>{
//      if(curr %2==0)
//      {
//         prev.even.push(curr)
//      }
//      else{
//         prev.odd.push(curr)
//      }
//      return prev
// },{
//     even : [],
//     odd :[]
// })
// console.log(newarr);

////-----------------every and some method---------------//

////-------------some method------------------//

//// q- is even presen in arr or not 

// let arr=[1,2,3,4,5,6,7,8,9]
// let newarr=arr.some((item,index)=>{
//     return item%2==0
// })
// console.log(newarr);

//// here output true because even number is present in arr------

//// ----------- another example where even is not present
// let arr=[1,3,5,7,9]

// let newarr=arr.some((item,index)=>{
//     return item % 2==0
// })
// console.log(newarr);

//// here output is false because even number is not present in arr.

/////-------------quesion practice on some method-------------//
// let users = [
//   { name: "A", age: 22 },
//   { name: "B", age: 17 },
//   { name: "C", age: 19 }
// ];
// let ans=users.some((item,index)=>{
//     return item.age<18
// })
// console.log(ans);

// let products = [
//   { name: "Phone", stock: 5 },
//   { name: "Laptop", stock: 0 },
//   { name: "Tablet", stock: 3 }
// ];
// let ans=products.some((item,index)=>{
//     return item.stock==0
// })
// console.log(ans);

//Check if any word has length greater than 5
// const words = ["cat", "eleephant", "dog"]
// let ans=words.some((item,index)=>{
//     return item.length>5
// })
// console.log(ans);

////Check if any student scored above 90 in any subject
// const students = [
//   { name: "A", marks: [70, 80, 60] },
//   { name: "B", marks: [88, 99, 79] },
//   { name: "C", marks: [50, 60, 65] }
// ];
// let ans=students.some((item,index)=>{
//    return item.marks.some((val)=>{
//     return val>90
//    })
// })
// console.log(ans);



////-------------------Set practice question----------


/// set understend

//// adding element

// const myset=new Set()
// myset.add(1)
// myset.add("ashu")
// myset.add(true)
// myset.add({name:"ashu"})
// console.log(myset);

// // delete element
// myset.delete(true)
// console.log(myset);

// // not allow to add duplicate elements
// myset.add(1)
// console.log(myset);

// // has to check element
// let abc=myset.has(1)
// let xyz=myset.has(7)
// console.log(xyz);
// console.log(abc);


/// we can also do loop on set



// clear which delete all elements
// myset.clear()
// console.log(myset);

//// loop through set
// let arr=[1,2,3,4,5,6,7,8,9,3,2,5]
// let setarr= new Set(arr)

// for(let item of setarr)
// {
//     console.log(item);
    
// }

// // both are for doing loop on sets

// setarr.forEach((item)=>{
// console.log(item);
// })


//// given an array and return an array with unique element
// let arr=[2,1,4,3,5,3,1,5,6,7,8,7,5,9,2,1,4]
// let setarr= new Set(arr)
// console.log(setarr);
// let newarr=Array.from(setarr)
// console.log(newarr);


////q-1
//// given an array and return an array with unique element

// let arr=[1,2,2,3,4,4]
// const myset= new Set(arr)
// let arr2=Array.from(myset)
// console.log(arr2);

//// check if array has duplicates

// let arr=[1,2,3,1]
// let setarr=new Set(arr)
// if(arr.length==setarr.length)
// {
//     console.log(" no duplcate"); 
// }
// else
// {
//     console.log("yes duplicate");
    
// }


// //// q-2
//// check if array has duplicates

// let arr=[1,2,3,1]
// const myset=new Set(arr)
// if(arr.length==myset.size)
// {
//     console.log("no duplicate");
// }
// else
// {
//     console.log("yes duplicate");  
// }

//// count unique element

// let arr=[1,1,2,3,3,4]
// let setarr=new Set(arr)
// console.log(setarr.size);

/// intersection of two array means common element in both array 

// let arr1=[1,2,3, 2, 3, 4]
// let arr2= [3, 4, 5, 6]

// let setarr1=new Set(arr1)
// let ansset=new Set()
// for(let item of arr2)
// {
//     if(setarr1.has(item))
//     {
//         ansset.add(item)
//     }
// }
// console.log(Array.from(ansset));

//// union of 2 array means remove common element from both array 

// let arr1= [1, 2, 3]
// let arr2=[3, 4, 5]
// let setarr=new Set([...arr1,...arr2])
// console.log(Array.from(setarr));


//// diffrence of two array present in a but not in b

// let arr1=[1,2,3,4,5,6]
// let arr2=[2,4,8]
// let set=new Set(arr1)
// for(let item of arr2)
// {
//     if(set.has(item))
//     {
//         set.delete(item)
//     }
// }
// console.log(Array.from(set));


//// symmetric diffrence 

// let arr1=[1,2,3,4,8]
// let arr2=[2,3,4,7,6]
// let set=new Set(arr1)
// for(let item of arr2)
// {
//     if(set.has(item))
//     {
//         set.delete(item)
//     }
//     else
//     {
//         set.add(item)
//     }
// }
// console.log(Array.from(set));



////q-3
//// count unique element

// let arr=[1,1,2,3,3,4]
// let set=new Set(arr)
// console.log(set.size);

////q-4
//// intersection of two array means print common element in both array

// let arr1=[1,2,2,1,3]
// let arr2=[2,2,3]
// let set=new Set(arr1)
// let ansset= new Set()
// for(let item of arr2)
// {
//     if(set.has(item))
//     {
//         ansset.add(item)
//     }
// }
// console.log(Array.from(ansset))

////q-5
//// union of two array

// let arr1=[1,2]
// let arr2=[2,3]
// let set=new Set([...arr1,...arr2])
// console.log(Array.from(set));

////q-6
//// diffrence of two array

// let arr1=[1,2,3]
// let arr2=[2,4]
// let set=new Set(arr1)
// for(let item of arr2)
// {
//     if(set.has(item))
//     {
//         set.delete(item)
//     }
// }
// console.log(Array.from(set));


////q-7
//// symmetric diffrence

// let arr1=[1,2,3]
// let arr2=[2,3,4]
// let set=new Set(arr1)
// for(let item of arr2)
// {
//     if(set.has(item))
//     {
//         set.delete(item)
//     }
//     else
//     {
//         set.add(item)
//     }
// }
// console.log(Array.from(set));


////-------------map method----------

// const mymap=new Map()
// mymap.set("name","ashu")
// mymap.set("name1","aks")
// mymap.set("ispresent",true)
// mymap.set("age",21)
// console.log(mymap);
// mymap.delete("name1")
// let abcd=mymap.get("age")
// console.log(abcd);
// let has=mymap.has("name")
// console.log(has);
// console.log(typeof mymap);
// let iterable=mymap.entries()
// console.log(iterable);
// for(let [key,value] of mymap){
//     console.log(key,value);
    
// }
// mymap.forEach((value,key)=>{
//     console.log(key,value);
// })

// console.log(mymap);

///q-given an string count alphabate count

// let str="mynameisjavascript"
// let map=new Map()
// for(let item of str)
// {
//     if(map.has(item))
//     {
//         map.set(item,map.get(item)+1)
//     }
//     else
//     {
//         map.set(item,1)
//     }
// }
// console.log(map);

///------------sorting both alghorihm and sor method---
// let arr=[1,3,1,6,2,8,5,9]
// arr.sort()
// console.log(arr);

/// here working good because sort nethod sort everything in lescographical order or dicionary order

// let arr=[11,2,111,100,2,3,21,33,4,5,8,79,8]
// arr.sort()
// console.log(arr);

/// here  not working good because sort method sort everything in lescographical order or dicionary order

// let arr=[11,2,111,100,2,3,21,33,4,5,8,79,8]
// arr.sort((a,b)=>{
//     return a-b
// })
// console.log(arr);

/// now working good because we have passed compare fumction and compare fn compare each and sort it

// let arr=[11,2,111,100,2,3,21,33,4,5,8,79,8]
// arr.sort((a,b)=>{
//     return b-a
// })
// console.log(arr);
/// now sort in decending order or non-increasing order 

/////---------now sorting on string 
// let arr=["c","a","aa","b","e","d"]
// arr.sort()
// console.log(arr);

// let arr=["ashu","mohan","aayush","subham"]
// arr.sort()
// console.log(arr);

/// in case of string sort mehod work good 

///-----------sort method on object

// let arr=[
//     {name:"ashu",age:21},
//     {name:"raju",age:20},
//     {name:"shanu",age:18}
// ]
// arr.sort((a,b)=>{
//     return a.age-b.age
// })
// console.log(arr);

// let arr=[
//     {name:"ashu",age:21},
//     {name:"raju",age:20},
//     {name:"aahanu",age:18}
// ]
// arr.sort((a,b)=>{
//     return a.name.localeCompare(b.name)
// })
// console.log(arr);

// bubble sort

// let arr=[1,1,2,0,1,1,2,2,0,0,1]
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
//     if(issorted==true)
//     {
//         break
//     }
// }
// console.log(arr);





















// let mymap=new Map()
// mymap.set("name","ashu"),
// mymap.set("name1","raj")
// mymap.set("name2","ako")
// // console.log(mymap);
//// method 1
// for(let item of mymap)
// {
//     console.log(item);
// }

//// same mehod but destructure item ino key:value

// for(let [key,value] of mymap)
// {
//     console.log(key,value);
// }

// for(let [key,value] of mymap)
// {
//     console.log(key);
// }
// for(let [key,value] of mymap)
// {
//     console.log(value);
// }

/////-------------------recurssion practice-------------//

//// this is infinite recurssion 

// function sayhi()
// {
//     console.log("hii");
//     sayhi()
// }
// sayhi() 

///------print 1 to n with using recurssion-------
// function print(i,n)
// {
//     if(i>n)
//     {
//         return
//     }
//     console.log(i);
//     print(i+1,n)
// }
// print(1,10)

////------print n to 1 usng recursion

// function print(i,n)
// {
//     if(i>n)
//     {
//         return
//     }
//     print(i+1,n)
//     console.log(i);
// }
// print(1,10)


 //////////----------------revision 5th march class---------



 // nth even fibonacci series

//  function fibo(n)
//  {
//     function helper(n)
//     {
//         if(n==1 || n==2)
//         {
//             return 1
//         }
//         return helper(n-1) + helper(n-2)
//     }
//     return helper(n*3)
//  }
//  console.log(fibo(2));

/// nth fibonacci series 

// function fibo(n)
// {
//     if(n==1)return 0
//     if(n==2) return 1
//     return fibo(n-1) + fibo(n-2)
// }
// console.log(fibo(5));



// let arr=[1,2,3,4,5]
// let ret=arr.map((item,index)=>{
//     return item +5
// })
// console.log(ret);

 
 ////q take user input and print table of that number 

//  let n=Number(prompt("enter value of n"))
//  for(let i=1;i<=10;i++)
//  {
//     console.log(`${n} * ${i} = ${n*i}`);
//  }
 
////q given n=5,print star in one line  * * * * * like this 
// let n=5
// let str=" "
// for(let i=1;i<=n;i++)
// {
//     str+="* "
// }
// console.log(str);

///-----------nested loop----------------//

////q- 4 person in a line give 1,2,3 to each and every 4 person [now using nested loop]

// let person=4
// for(let i=1;i<=person;i++)
// {
//     for(let j=1;j<=3;j++)
//     {
//         console.log(`person ${i} : unit ${j}`);
//     }
// }

////q-print table from 1 to 100 
// for(let i=1;i<=100;i++)
// {
//     for(let j=1;j<=10;j++)
//     {
//         console.log(`${i} * ${j}=${i*j}`);
//     }
// }

//// q-print table by taking user input from where to where 

// let start=Number(prompt("enter value of start"))
// let end=Number(prompt("enter value of end"))

// for(let i=start;i<=end;i++)
// {
//     for(let j=1;j<=10;j++)
//     {
//         console.log(`${i} * ${j}=${i*j}`);
//     }
// }

////-----------sub-array---------------//

////q-print all subarray 
// subarray
// let arr=[1,2,3,4,5]
// for(let i=0;i<arr.length;i++)
// {
//     let subarr=[]
//     for(let j=i;j<arr.length;j++)
//     {
//         subarr.push(arr[j])
//         console.log(subarr);
//     }
// }

//// q-print all substring 
// // substring
// let str="ashutosh"
// for(let i=0;i<str.length;i++)
// {
//     let str1=" "
//     for(let j=i;j<str.length;j++)
//     {
//         str1+=str[j]
//         console.log(str1);
//     }
// }

////--------star pattern practice---------------//
/// make square
// let n=5
// for(let i=1;i<=n;i++)
// {
//     let str=" "
//     for(let j=1;j<=n;j++)
//     {
//         str+="* "
//     }
//     console.log(str);
// }
  
////q-make rectangle

// let n=5
// let m=7
// for(let i=1;i<=n;i++)
// {
//     let str=" "
//     for(let j=1;j<=m;j++)
//     {
//         str+="* "
//     }
//     console.log(str); 
// }

///q-make rigth angle triangle in increasng order 

// let n=5
// for(let i=1;i<=n;i++)
// {
//     let str=" "
//     for(let j=1;j<=i;j++)
//     {
//         str+="* "
//     }
//     console.log(str); 
// }

///q-make rigth angle triangle in decreasing order 
// let n=5
// for(let i=1;i<=n;i++)
// {
//     let str=" "
//     for(let j=1;j<=n-i+1;j++)
//     {
//         str+="* "
//     }
//     console.log(str);  
// }

//// now make hollow square

// let n=4
// for(let i=1;i<=n;i++)
// {
//     let str=" "
//     for(let j=1;j<=n;j++)
//     {
//         if(i==1 || i==n || j==1 || j==n )
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

// let n=5
// for(let i=1;i<=n;i++)
// {
//     let str=" "
//     for(let j=1;j<=i;j++)
//     {
//         if(j==1 || i==n || i==j)
//         {
//             str+="* "
//         }
//         else
//         {
//             str+="  "
//         }
//     }
//      console.log(str);  
// }

//now make another pattern 
// let n=5
// for(let i=1;i<=n;i++)
// {
//     let str=" "
//     for(let j=1;j<=n-i;j++)
//     {
//         str+="  "
//     }
//     for(let k=1;k<=i;k++)
//     {
//         str+="* "
//     }
//     console.log(str);
// }

//// ----------both are same------

// let n=5
// let star=1
// let space=n-1
// for(let i=1;i<=n;i++)
// {
//     let str=" "
//     for(let j=1;j<=space;j++)
//     {
//         str+="  "
//     }
//     for(let k=1;k<=star;k++)
//     {
//         str+="* "
//     }
//     console.log(str);
//     star++
//     space--
// }

/// another pattern question

// let n=5
// for(let i=1;i<=n;i++)
// {
//     let str=" "
//     for(let j=1;j<=n;j++)
//     {
//         if(i==n || i==1 || j==n || j==1 || i==j || i+j==n+1)
//         { 
//             str+="* "
//         }
//         else
//         {
//             str+="  "
//         }
//     }
// console.log(str);

// }

//// another pattern 

// let n=5
// let star=1
// let space=n-1
// for(let i=1;i<=n;i++)
// {
//     let str=""
//     for(let j=1;j<=space;j++)
//     {
//       str+="  "
//     }
//     for(let k=1;k<=star;k++)
//     {
//         str+="* "
//     }
//     console.log(str);
//     star+=2
//     space--
// }

// now make another pattern 
// let n=5
// let star=2*n -1 
// let space=0
// for(let i=1;i<=n;i++)
// {
//     let str=""
//     for(let j=1;j<=space;j++)
//     {
//         str+="  "
//     }
//     for(let k=1;k<=star;k++)
//     {
//         str+="* "
//     }
//     console.log(str);
//     star-=2
//     space++
// }


// let n=5
// let star=2*n -1 
// let space=0
// for(let i=1;i<=n;i++)
// {
//     let str=""
//     for(let j=1;j<=space;j++)
//     {
//         str+="  "
//     }
//     for(let k=1;k<=star;k++)
//     {
//         if(k==1 || k==star || i==1)
//         {
//             str+="* "
//         }
//         else
//         {
//             str+="  "
//         }
//     }
//     console.log(str);
//     star-=2
//     space++
// }


// let n=9
// let star=n
// let space=0
// for(let i=1;i<=n;i++)
// {
//     let str=""
//     for(let j=1;j<=space;j++)
//     {
//         str+="  "
//     }
//     for(let k=1;k<=star;k++)
//     {
//         str+="* "
//     }
//     console.log(str);
//    if(i<n/2)
//    {
//     star-=2
//     space++
//    }
//    else
//    {
//     star+=2
//     space--
//    }
// }

///--------------2-d array or matrix---------
/// q-given an array access all element of 2d array by using both for-of loop and for loop
// let arr=[[1,2,3],[4,5,6],[7,8,9]]
// for(let item of arr)
// {
//     for(let values of item)
//     {
//         console.log(values);  
//     }
// }

/// same by using for loop
// let arr=[[11,12,13],[14,15,16],[17,18,19]]
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr[i].length;j++)
//     {
//         console.log(arr[i][j]);  
//     }
// }


////////--------------linear search practice----------//

////-------best-practice using function

// let arr=[3,1,-10,9,77,65,5]
// function linearsearch(arr,target)
// {    
//      let ans=-1
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]==target)
//         {
//             ans=i
//             break
//         }
//     }
//     return ans
// }
// console.log(linearsearch(arr,65));


//////---------------binary search-------------//
// let arr=[1,2,3,4,5,6,7]
// let target=4
// let ans=-1
// let start=0
// let end=arr.length-1
// while(start<=end)
// {
//     let mid=Math.floor((start +end)/2)
//     if(arr[mid]==target)
//     {
//         ans=mid
//         break
//     }
//     else if(arr[mid]>target)
//     {
//         start=mid+1
//     }
//     else
//     {
//         end=mid-1
//     }
// }
// console.log(ans);

////--------------best practice using function 


// function binarysearch(arr,target)
// {
//     let ans=-1
//     let start=0
//     let end=arr.length-1
//     while(start<=end)
//     {
//         let mid=Math.floor((start +end)/2)
//         if(arr[mid]==target)
//         {
//             ans=mid
//             return mid
//         }
//         else if(arr[mid]<target)
//         {
//             start=mid+1
//         }
//         else
//         {
//             end=mid-1
//         }
//     }
//     return ans
// }
// console.log(binarysearch([1,2,3,4,5,6,7],1));

///////------------HIGHER ORDERED FUNCTION AND CALL BACK FUNCTION REVSION------------//

// function abc(name,age)
// {
//     console.log(`hello my name is ${name} and my age is ${age}`);
    
// }
// abc("ashu",21)

// function hof()
// {
//     return () => {
//         console.log("helllo from returend hof function"); 
//     }
// }
// // hof()()
// /// or 
// const returend=hof()
// returend()
/// here function return funcion 

////-----------function accept funcion as argument-------

// function hof(cb)
// {
//     cb()
// }
// hof(()=>{
//     console.log("Hello from call back function"); 
// })

////------------map,filter and reduce all three are higher ordered function used on array///
// q-gven an array ,reurn new arr with square of all previous elements....

/// first do with loop then use map 

// let arr=[1,2,3,4,5]
// let ansarr=[]
// for(let i=0;i<arr.length;i++)
// {
//     ansarr.push(arr[i] * arr[i]);
// }
// console.log(ansarr);

///---------------- now using map 

// let arr=[1,2,3,4,5]
// let newarr=arr.map((item,index)=>{
//     return item*item
// })
// console.log(newarr);

////q- given an array return new arr in which all element are sum 2 time 

// let arr=[1,2,3,4,5]    //// output=[2,4,6,8,10]
// let newarr=arr.map((item,index)=>{
//     return item + item
// })
// console.log(newarr);


/// Q- convert number to string 

// let arr=[1,2,3,4,5]
// let newarr=arr.map((item,index)=>{
//     return item.toString()
// })
// console.log(newarr);

/// Q- SQUARE ALL ELEMENT 

// let arr=[1,2,3,4,5]
// let newarr=arr.map((item,index)=>{
//     return item * item
// })
// console.log(newarr);

/// Q- add index to each element
// let arr=[10,12,15]
// let newarr=arr.map((item,index)=>{
//     return item+index
// })
// console.log(newarr);

/// Q- convert name to uppercase

// let arr=["ram","shyam"]
// let newarr=arr.map((item,index)=>{
//     return item.toUpperCase()
// })
// console.log(newarr);

///Q-get length of each element

// let arr=["hi","hello"]
// let newarr=arr.map((item,index)=>{
//     return item.length
// })
// console.log(newarr);

/// Q- extract age 

// let arr=[{name:"A", age:20}, {name:"B", age:25}]
// let newarr=arr.map((item,index)=>{
//     return item.age
// })
// console.log(newarr);

// Q- return count of each element 
// let arr=["apple","banana","kiwi"]
// let newArr=arr.map((item,index)=>{
//     return item.length
// })
// console.log(newArr);

///Q- given booleam convert into string

// let arr=[true,false,true]
// let newarr=arr.map((item,index)=>{
//     return item.toString()
// })
// console.log(newarr);

/// Q- add mr before name

// let arr=["Amit","Ashu"]
// let newArr=arr.map((item,index)=>{
//     return `Mr. ${item}`
// })
// console.log(newArr);

// let arr=[{name:"ashu",age:21},
//       {name:"monu",age:5}
// ]
// let newarr=arr.map((item,index)=>{
//     return{...item,
//         isadult:item.age>=18
//     }
// })
// console.log(newarr);










////------------------recurssion pracice

//// print 1 to n using recurssion

// function print(n)
// {
//     if(n>10)
//     {
//         return
//     }
//     console.log(n);
//     print(n+1) 
// }
// print(1)


















// function print(i,n)
// {
//     if(i>n)
//     {
//         return
//     }
//     console.log(i);
//     print(i+1,n)
// }
// print(1,4)

// function print(i,n)
// {
//     if(i>n)
//     {
//         return
//     }
//     print(i+1,n)
//     console.log(i);
// }
// print(1,4)

////

//// q- print sum of n natural number-----------

// function sum(n)
// {
//     if(n==0)
//     {
//       return 0
//     }
//     return n + sum(n-1)
// }
// console.log(sum(5));

// //// this is way back kyuki jbb wapas aa rahe hai base case sai tbh answer bann raha hai 

/// now same question by way-up

// function totalsum(n,sum)
// {
//     if(n==0)
//     {
//         console.log(sum);
//         return 
//     }
//     totalsum(n-1,sum+n)
// }
// totalsum(5,0)

//// now anoher question print sum from 1 to n
/// now first do it by way-up

// function totalsum(n,curr,sum)
// {
//     if(n==curr)
//     {
//         console.log(sum+curr)
//         return
//     }
//     totalsum(n,curr+1,sum+curr)
// }
// totalsum(3,1,0)

//// now do by wayback

// function totalsum(n,curr)
// {
//     if(curr==n)
//     {
//         return curr
//     }
//     return curr+ totalsum(n,curr+1)
// }
// console.log(totalsum(5,1));

//// Recursively Print Numbers In Reverse
// function reverse(n)
// {
//     if(n==0)
//     {
//         return 
//     }
//     console.log(n)
//     reverse(n-1)
    
// }
// reverse(5)

/// now print in one line 

// function reverse(n,str)
// {
//     if(n==0)
//     {
//         console.log(str)
//         return 
//     }
//     reverse(n-1,str+n+" ")
 
    
// }
// reverse(3,"")

//// product of n natural number
/// this is wayback 
// function product(n)
// {
//     if(n==1)
//     {
//         return 1
//     }
//     return n * product(n-1)
// }
// console.log(product(5));

/// way up 

// function product(n,pro)
// {
//     if(n==1)
//     {
//         console.log(pro);
//         return 
//     }
//      product(n-1,pro * n)
// }
// product(5,1)

//// print pattern 

// function print(n,str)
// {
//     if(n==0)return
//     str+="* "
//     console.log(str);
//     print(n-1,str)
// }
// print(5,"")


/// now print from 1to n in one line 
// function print(n,curr,str)
// {
//     if(curr==n)
//     { 
//       console.log(str+curr);
//       return
//     }
//     print(n,curr+1,str+curr+" ")
// }
// print(5,1,"")

//// print range 
// function print(x,y)
// {
//     if(x>y)
//     {
//         return
//     }
//     console.log(x);
//     print(x+1,y) 
// }
// print(5,8)

// print in one line 

// function print(x,y,str)
// {
//     if(x>y)
//     {
//         console.log(str);
//         return
//     }
    
//     print(x+1,y,str+x+" ") 
// }
// print(5,8,"")


//// PRINT ACCIOJOB RECURSIVELY 3 TIME 

// function print (n)
// {
//     if(n==0)
//     {
//         return
//     }
//     console.log("ACCIOJOB");
//     print(n-1)
// }
// print(3)

/// recurssive exponentiation by squaring

// function print (x,n)
// {
//     if(n==0)
//     {
//         return 1
//     }
//     return x * print(x,n-1)
// }
// console.log(print(2,3));

// function print (n)
// {
//     if(n==0)
//     {
//         return 1
//     }
//     return n *print(n-1)
// }
// console.log(print(5));

//// fibonacci series 
//// find nth number in fibonacci series  where n=7

// function fib(n)
// {
//     if(n==1)
//     {
//         return 0
//     }
//     if( n==2)
//     {
//         return 1
//     }
//     return fib(n-1) + fib(n-2)
// }
// console.log(fib(7));

//// find sum of array..........
// sum of array
// let arr=[1,2,3,4,5]
// function sum(arr)
// {
//     if(arr.length==0)
//     {
//         return 0
//     }
//     let ele=arr.shift()
//     return ele + sum(arr)
// }
// console.log(sum(arr))

// // smaller in array
// let arr=[1,2,3,4,5]
// function small(arr,i,n)
// {
//     if(i==n-1)
//     {
//         return i
//     }
//     return Math.min(arr[i],small(arr,i+1,n))
// }
// console.log(small(arr,0,5));

// let arr=[1,2,3,4,5]
// function print(arr,i,str="")
// {
//     if(i==arr.length)
//     {
//         console.log(str);
//         return
//     }
//      str+=arr[i] + " "
//      return print(arr,i+1,str)
// }
// print(arr,0)

// let arr=[1,2,3,2,3,5]
// let n=6
// let x=2
// let i=0
// function print(arr,n,x,i,ans)
// {
//     if(i==n)
//     {
//         console.log(ans);
//         return
//     }
//     if(arr[i]==x)
//     {
//         ans+= i +" "
//     }
//     print(arr,n,x,i+1,ans)
// }
// print(arr,n,x,i,"")

// // palimdome check
// let arr=[1,2,3,2,1]
// function print(arr,s,e)
// {
//     if(s>=e)
//     {
//         return true 
//     }
//     if(arr[s] != arr[e])
//     {
//         return false
//     }
//     return print(arr,s+1,e-1)
// }
// console.log(print(arr,0,arr.length-1));

// // last occurance index

// let arr=[1,8,9,4,2]
// let t=1
// let i=arr.length-1

// function print(arr,i,t)
// {
//     if(i<0)
//     {
//         return -1
//     }
//     if(arr[i]==t)
//     {
//         return i
//     }
//     return print(arr,i-1,t)
// }
// console.log(print(arr,i,t));

//// count 1

// let num=1124512114
// function count(num,ans=0)
// {
//     if(num==0)
//     {
//         return ans
//     }
//     let ld=num%10
//     num=Math.floor(num/10)
//     if(ld==1)
//     {
//         ans++
//     }
//     return count(num,ans)
// }
// console.log(count(num));

// let str="abcxxxaba"
// function count(str,i=0,ans=0)
// {
//     if(i>str.length-2)
//     {
//         return ans
//     }
//     if(str[i]=="a" && str[i+1]=="b" && (str[i+2]=="c" || str[i+2]=="a"))
//     {
//         ans++
//     }
//     return  count(str,i+1,ans)
// }
// console.log(count(str));

// /// print reverse array recursively 

// let arr=[1,2,3,4]
// let i=arr.length-1
// function reverse(arr,i,ans="")
// {
//     if(i<0)
//     {
//         return ans
//     }
//     ans+= arr[i] +" "
//     return reverse(arr,i-1,ans)
// }
// console.log(reverse(arr,i));

//// find count 
// let n=12347
// function print(n)
// {
//     if(n==0)
//     {
//         return 0
//     }
//     n=Math.floor(n/10)
//     return 1+ print(n)
// }
// console.log(print(n));

//// noX
// let str="XaaaXaaa"
// function print(str,idx,ans)
// {
//     if(idx==str.length)
//     {
//         return ans 
//     }
//     if(str[idx]=="X")
//     {
//         return print(str,idx+1,ans)
//     }
//     else
//     {
//         return print(str,idx+1,ans+=str[idx])
//     }
   
// }
// console.log(print(str,0,""));

/// nth fibonacci number 
// function fb(n)
// {
//     if(n==1)
//     {
//         return 0
//     }
//     if(n==2)
//     {
//         return 1
//     }
//     return fb(n-1) + fb(n-2)
// }
// console.log(fb(6));

/// question find nth even fibonacci number
// function fb(n){
//     function helper(n){
//         if(n==1 || n==2)
//         {
//             return 1
//         }
//         let ret=helper(n-1) + helper(n-2)
//         return ret
//     }
//     return helper(n*3)
// }
// console.log(fb(3));

/////or---------anotherway easy way---------

// function fb(n)
// {
//     if( n==1 || n==2)
//     {
//         return 1
//     }
//     return fb(n-1) + fb(n-2)
// }
// console.log(fb(2*3));




///------------merge 2array----------//
// let a1=[1,7,37,42,56]
// let a2=[3,4,5,10]
// function merge(a1,a2)
// {
//     let ans=[]
//     let i=0
//     let j=0
//     while(i<a1.length && j<a2.length)
//     {
//         if(a1[i]<a2[j])
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
    
//         while(i<a1.length)
//         {
//             ans.push(a1[i])
//             i++
//         }
//         while(j<a2.length)
//         {
//             ans.push(a2[i])
//             j++
//         }
//         return ans
// }
























// console.log(merge(a1,a2));

// function merge(a1,a2)
// {
//     let ans=[]
//     let i=0
//     let j=0
//     while(i<a1.length && j<a2.length)
//     {
//         if(a1[i]<a2[j])
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
    
//         while(i<a1.length)
//         {
//             ans.push(a1[i])
//             i++
//         }
//         while(j<a2.length)
//         {
//             ans.push(a2[i])
//             j++
//         }
//         return ans
// }

// function mergesort(arr)
// {
//     if(arr.length==1)
//     {
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let left=mergesort(arr.slice(0,mid))
//     let right=mergesort(arr.slice(mid))
//     return merge(left,right)
// }
// console.log(mergesort([99,1,80,270,3]));




////////-----------revision for J.S.2---------------------

////////----------2-D ARRAYS/MATRIX--------------------

// let arr=[[1,2,3],[4,5,6],[4,5,3,2,1]]
// let newArr=[...arr]
// newArr.push(22)
// console.log(arr);
// console.log(newArr);

//// access all array seperately from 2-d array

//------- for-of loop
// let arr =[[1,2],[11,22,33,42],[1,65],[7,9,2,5]]
// for(let item of arr)
// {
//     console.log(item);
// }

///-----------for-loop
// let arr =[[1,2],[11,22,33,42],[1,65],[7,9,2,5]]
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

//// print  all element  from 2-d array

////----------for-of-loop
// let arr =[[1,2],[11,22,33,42],[1,65],[7,9,2,5]]
// for(let item of arr)
// {
//     for(let value of item)
//     {
//         console.log(value);
//     }
// }

////////-----optimized for-loop
// let arr =[[1,2],[11,22,33,42],[1,65],[7,9,2,5]]
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr[i].length;j++)
//     {
//         console.log(arr[i][j]);
//     }
// }

////---------user input and make array----------

// let row=Number(prompt("enter number of row"))
// let arr=[]
// for(let i=0;i<row;i++)
// {
//     let col=Number(prompt("enter value of col"))
//     let innerarr=[]
//     for(let j=0;j<col;j++)
//     {
//         innerarr.push(Number(prompt(`row &{i} : col &{j}`)))
//     }
//     arr.push(innerarr)
// }
// console.log(arr);

////------------max and min in 2-d array

// let arr=[
//     [2,4,8,1,9],
//     [22,333,22,4,-10]
// ]
// let max=-Infinity
// let min=+Infinity
// for(let item of arr)
// {
//     for(let value of item)
//     {
//         if(value>max)
//         {
//             max=value
//         }
//         if(value<min)
//         {
//             min=value
//         }
//     }
// }
// console.log(max,min);

////----------reverse 2-d array

// let arr=[
//     [1,2,3,45],
//     [33,44,23,11]
// ]
// for(let item of arr)
// {
//     let start=0
//     let end=item.length-1
//     while(start<end)
//     {
//         let temp=item[start]
//         item[start]=item[end]
//         item[end]=temp
//         start++
//         end--
//     }
// }
// console.log(arr);

////------------sum of 2d array------------
// let arr=[[1,2,3,4,5],[1,2,3,4,5]]
// let sum=0
// for(let item of arr)
// {
//     for(let val of item)
//     {
//         sum+=val
//     }
// }
// console.log(sum);

// let arr=[[1,2,3,4,5],[1,2,3,4]]
// let sum=0
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr[i].length;j++)
//     {
//         sum+=arr[i][j]
//     }
// }
// console.log(sum);

////---------print array row wize-------------//

////----------for-of-loop---------
// let arr=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
// for(let item of arr)
// {
//     for(let val of item)
//     {
//         console.log(val);
        
//     }
// }

////--------now by using for-loop----------//

// let arr=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr[i].length;j++)
//     {
//         console.log(arr[i][j]);
//     }
// }

////-----------now print collum wize

//// for printing coloum wize we have to use only for loop 

// let arr=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr[i].length;j++)
//     {
//         console.log(arr[j][i]);
//     }
// }
///// this code is working because array sixe is same it will not work for uneven size

////-------------perfect code for any size

// let arr=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[111,112,113,114]]
// for(let i=0;i<arr[0].length;i++)
// {
//     for(let j=0;j<arr.length;j++)
//     {
//         console.log(arr[j][i]);
//     }
// }

// let arr=[
//    ["ashu","b"],
//    ["raju","c"],
//    ["ankit","a"],
//    ["aayush","d"],
// ]
// let ansarr=[]
// for(let item of arr)
// {
//  ansarr.push(item[0])
// }
// ansarr.sort()
// console.log(ansarr);







//// print colum wize in one-line

// let arr=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[111,222,444,555]]
// let str=""
// for(let i=0;i<arr[0].length;i++)
// {
//     for(let j=0;j<arr.length;j++)
//     {
//         str+=(arr[j][i]) + " "
//     }
// }
// console.log(str);

//// boolean fill 

// let arr=[
//     [1,0,0,0],
//     [0,0,0,0],
//     [0,1,0,0],
//     [0,0,0,1]
// ]
// for(let item of arr)
// {
//     let isonepresent=item.includes(1)
//     for(let i=0;i<item.length;i++)
//     {
//         if(isonepresent==true)
//         {
//             item[i]=1
//         }
//     }
// }
// console.log(arr);

//// special marix

// let arr=[
//     [1,0,0,5],
//     [0,2,6,0],
//     [0,7,3,0],
//     [8,0,0,4]
// ]
// let n=4
// let ans=true
// for(let i=0;i<n;i++)
// {
//     for(let j=0;j<n;j++)
//     {
//         if(i==j || i+j==n-1)
//         {
//             if(arr[i][j]==0)
//             {
//                 ans=false
//                 break
//             }
//         }
//         else
//         {
//             if(arr[i][j]!=0)
//             {
//                 ans=false
//                 break
//             }
//         }
//     }
// }
// console.log(ans);

//// alternate matrix tranversal

// let arr=[
//     [7,2,3],
//     [2,3,4],
//     [5,6,1],
//     [9,4,1]
// ]
// let str=""
// let row=4
// let col=3
// for(let i=0;i<row;i++)
// {
//     if(i%2==0)
//     {
//         for(let j=0;j<col;j++)
//         {
//             str+=arr[i][j] +" "
//         }
//     }
//    if(i%2!=0)
//     {
//         for(let j=col-1;j>=0;j--)
//         {
//             str+=arr[i][j] +" "
//         }
//     }
// }
// console.log(str);

//// dish price 

// let arr=[["1", "Dish1", 10],["2", "Dish2", 20], ["3", "Dish3", 30]] 
// let sum=0
// for(let item of arr)
// {
//     sum+=item[2]
// }
// console.log(sum);

//// alt matrix sum 

// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// let n=3
// let s1=0
// let s2=0
// for(let i=0;i<n;i++)
// {
//     for(let j=0;j<n;j++)
//     {
//         if((i+j) %2==0)
//         {
//             s1+=arr[i][j]
//         }
//         else
//         {
//             s2+=arr[i][j]
//         }
//     }
// }
// console.log(s1);
// console.log(s2);

/// j-s2 mock batch 18 question paper

///q-1

// let n=5
// for(let i=1;i<=n;i++)
// {
//     let str=""
//     for(let j=1;j<i;j++)
//     {
//         str+=" "
//     }
//     for(let k=n-i+1;k>=1;k--)
//     {
//         str+= k
//     }
//     console.log(str);
// }
    
///q-4
// function divisiblefiltersum(arr){
//     return arr.filter(item =>item %3===0).map(item=>item *2).reduce((prev,curr)=> prev+curr,0)
// }
// console.log(divisiblefiltersum([3,5,6,7,9]));

//// j.s 2 q-3

// function countdigit(a,b,d)
// {
//     if(a>b)
//     {
//         return 0
//     }

//     let temp=a
//     let count=0
//     while(temp>0)
//     {
//         let ld=temp%10
//         temp=Math.floor(temp/10)
//         if(ld==d)
//         {
//             count++
//         }
//     }
//     return count +  countdigit(a+1,b,d)
// }
// console.log(countdigit(10,15,1));

//// q-6
// let arr=[7,3,10,5,1]
// let target=6
// arr.sort((a,b)=>{
//     let d1=Math.abs(target-a)
//     let d2=Math.abs(target-b)

//     if(d1==d2)
//     {
//         return a-b
//     }
//     else
//     {
//         return d1-d2
//     }
    
// })
// console.log(arr);


////-nested loop practice

// function printstar(n)
// {
//     for(let i=0;i<n;i++)
//     {
//         let str=""
//         for(let j=0;j<n;j++)
//         {
//             str+="* "
//         }
//          return str
//     }
// }
// console.log(printstar(5));

/// now print table from 1 to 100

// for(let i=1;i<=10;i++)
// {
//   for(let j=1;j<=10;j++)
//   {
//     console.log(`${i} * ${j} = ${i*j}`);
//   }
// }

// -------print all subarray of given array

// let arr=[1,2,3,4,5]
// for(let i=0;i<arr.length;i++)
// {
//   let subarr=[]
//   for(let j=i;j<arr.length;j++)
//   {
//     subarr.push(arr[j])
//     console.log(subarr);
//   }
// }

///------print all substring 

// let str="ashutosh"
// for(let i=0;i<str.length;i++)
// {
//   let substring=""
//   for(let j=i;j<str.length;j++)
//   {
//     substring+=str[j]
//     console.log(substring);
//   }
// }

///------------pattern practice question ------------//
// function print(n){

// for(let i=0;i<n;i++)
// {
//   let str=""
//   for(let j=0;j<n;j++)
//   {
//     str+="* "
//   }
//   console.log(str);
// }
// }
// print(5)

//// -------pattern---
// let row=5
// let col=7
// for(let i=0;i<row;i++)
// {
//   let str=""
//   for(let j=0;j<col;j++)
//   {
//     str+="* "
//   }
//   console.log(str);
// }

// let n=5
// for(let i=0;i<n;i++)
// {
//   let str=""
//     for(let j=0;j<=i;j++)
//     {
//       str+="* "
//     }
//     console.log(str);   
// }

///---------another pattern-------
// let n=4
// for(let i=0;i<n;i++)
// {
//   let str=""
//   for(let j=0;j<n-i;j++)
//   {
//     str+="* "
//   }
//   console.log(str);
  
// }


// let n=5
// for(let i=0;i<n;i++)
// {
//   let str=""
//   for(let j=0;j<n;j++)
//   {
//     if(i==0 || j==0 || i==n-1 || j==n-1)
//     {
//       str+="* "
//     }
//     else
//     {
//       str+="  "
//     }
//   }
//   console.log(str);
  
// }

/// ------another pattern--------------

// let n=5
// for(let i=1;i<=n;i++)
// {
//   let str=""
//   for(let j=1;j<=i;j++)
//   {
//     if(i==j || j==1 || i==n)
//     {
//       str+="* "
//     }
//     else
//     {
//       str+="  "
//     }
//   }
//   console.log(str);
// }

///----another pattern question----------
// let n=5
// for(let i=1;i<=n;i++)
// {
//   let str=""
//   for(let j=1;j<=n-i;j++)
//   {
//     str+="  "
//   }
//   for(let k=1;k<=i;k++)
//   {
//     str+="* "
//   }
//   console.log(str);
// }

// let n=5
// for(let i=1;i<=n;i++)
// {
//   let str=""
//   for(let j=1;j<=n;j++)
//   {
//     if(i==1  || i==n ||j==1 || j==n || j==i || i+j==n+1)
//     {
//       str+="* "
//     }
//     else
//     {
//       str+="  "
//     }
//   }
//   console.log(str);
// }


// let n=5
// let spaces=n-1
// let star=1
// for(let i=1;i<=n;i++)
// { 
//   let str=""
//   for(let j=1;j<=spaces;j++)
//   {
//     str+="  "
//   }
//   for(let k=1;k<=star;k++)
//   {
//     str+="* "
//   }
//   console.log(str);
//   star+=2
//   spaces--
// }


// let n=5
// let spaces=n-1
// let star=1
// for(let i=1;i<=n;i++)
// { 
//   let str=""
//   for(let j=1;j<=spaces;j++)
//   {
//     str+="  "
//   }
//   for(let k=1;k<=star;k++)
//   {
//     if(k==1 || k==star|| i==n )
//     {
//       str+="* "
//     }
//     else{
//       str+="  "
//     }
//   }
//   console.log(str);
//   star+=2
//   spaces--
// }

///----------2-d array practice----------////
//-------for-loop

// let arr=[[1,2,3,4],[8,9,4],[11,5,8,55,33,88]]
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr[i].length;j++)
//     {
//         console.log(arr[i][j]);
//     }
// }

//---------for of loop

// let arr=[[1,2,3,4],[8,9,4],[11,5,8,55,33,88]]
// for(let item of arr)
// {
//     for(let val of item)
//     {
//         console.log(val);  
//     }
// }

///--------find mimimum in array

// let arr=[[1,2,3,4],[8,-99,4],[11,5,8,55,33,-88]]
// let smallest=Infinity
// for(let item of arr)
// {
//     for(let val of item)
//     {
//         if(val<smallest)
//         {
//             smallest=val
//         }
//     }
// }
// console.log(smallest);

// let arr=[[1,2,3,4],[8,9,4],[11,5,8,55,33,88]]
// for(let item of arr)
// {
//     let start=0
//     let end=item.length-1
//     while(start<end)
//     {
//         let temp=item[start]
//         item[start]=item[end]
//         item[end]=temp
//         start++
//         end--
//     }
// }
// console.log(arr);


// let arr=[[1,2,3,4],[8,9,4],[11,5,8,55,33,88]]
// let newarr=[]
// for(let item of arr)
// {
//     for(let val of item)
//     {
//         newarr.push(val) 
//     }
// }
// console.log(newarr);

// let arr=[[1,2,3,4],[8,9,4],[11,5,8,55,33,88]]
// let ret=arr.flat(Infinity)
// console.log(ret);

// let arr=[[1,2,3,4,5],[1,2,3,4,5]]
// let sum=0
// for(let item of arr)
// {
//     for(let val of item)
//     {
//         sum+=val
//     }
// }
// console.log(sum);

// let arr=[[1,2,3,4,5],[1,2,3,4,5,6]]
// let sum=0
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr[i].length;j++)
//     {
//         sum+=arr[i][j]
//     }
// }
// console.log(sum);

//-------tranpose of matrix /// row ko collum banao collon ko row

// let arr=[
//     [1,1,1,1],
//     [2,2,2,2],
//     [3,3,3,3],
//     [4,4,4,4]
// ]
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<i;j++)
//     {
//         let temp=arr[i][j]
//         arr[i][j]=arr[j][i]
//         arr[j][i]=temp
//     }
// }
// console.log(arr);


// let arr=[
// [1,0,0,0],
// [0,0,0,0],
// [0,1,0,0],
// [0,0,0,0],
// [0,0,0,1]
// ]
// for(let item of arr)
// {
//     let onepresent=item.includes(1)
//     if(onepresent==true)
//   { 
//      for(let i=0;i<item.length;i++)
//      {
//         item[i]=1
//      }
//    }
// }
// console.log(arr);

///-----special matrix--------
// let arr=[
// [1,0,2],
// [0,2,0],
// [3,0,1]
// ]
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr[i].length;j++)
//     {
//         if(i==j || i+j==arr.length-1)
//         {
//             if(arr[i][j]==0)
//               {
//                 console.log(false);
//               }
//         }
//             else
//             {
//                 if(arr[i][j]!=0) 
//                 {
//                 console.log(false);

//                 }
//             }   
//     }
// }
// console.log(true); 





///-------searching technique ------------///
///------linear seach--- can be done on unsorted array----------
// function linear(arr,target)
// {
//     let ans=-1
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]==target)
//         {
//             ans=i
//             break
//         }
//     }
//     return ans
// }
// console.log(linear([3,2,8,9,1,7],97));

///---------binary search---------------//
// let arr=[11,13,46,52,79,100]
// let target=79
// let start=0
// let end=arr.length-1
// let ans=-1
// while(start<=end)
// {
//     let mid=Math.floor((start+end)/2)
//     if(arr[mid]==target)
//     {
//         ans=mid
//         break
//     }
//     else if(arr[mid]<target)
//     {
//         start=mid+1
//     }
//     else
//     {
//         end=mid-1
//     }
// }
// console.log(ans);


//--map,filter,reduce practice---------//
//-----           map        -------

// let arr=[1,2,3,4,5]

///add 5 to each element

// let retarr=arr.map((item,index)=>{
//     return item+5
// })
// console.log(arr);
// console.log(retarr);

// let arr=["hello","world"]
// let retarr=arr.map((item,index)=>{
//     return item.toUpperCase()
// })
// console.log(retarr);

// let arr=[1,2,3,4,5,6]
// let retarr=arr.map((item,index)=>{
//     return item.toString()
// })
// console.log(retarr);

//------------now filter -----
// let arr=[1,2,3,4,5,6,7,8,9]

/// return odd number

// let retarr=arr.filter((item,index)=>{
//     return item % 2 != 0
// })
// console.log(retarr);

// let arr=[5,2,19,100,99,1,22,13,4]
// //return arr greter than 10
// let retarr=arr.filter((item,index)=>{
//     return item>10
// })
// console.log(retarr);

///------------reduce method -----------///
// let arr=[1,2,3,4,5]
// // sum of all array
// let ret=arr.reduce((prev,curr)=>{
//    return (prev+curr)
// },0)/arr.length
// console.log(ret);

// let arr=[2,6,11,99,45]
// // find maximum number
// let ret=arr.reduce((prev,curr)=>{
// return Math.max(prev,curr)
// },0)
// console.log(ret);

// arr = [1,2,3,4,5,6]
// //👉 Even numbers → square → sum
// let ret=arr.filter((item)=>item%2==0).map((item)=>item*item).reduce((prev,curr)=>prev+curr,0)
// console.log(ret);

// s = [
//  {name:"amit", marks:[40,60]},
//  {name:"rohit", marks:[20,30]},
//  {name:"neha", marks:[70,80]}
// ]
// let ret=s.filter(s=>s.marks.reduce((prev,curr)=>prev+curr,0)/s.marks.length >=50).map(s => s.name.toUpperCase()).join(",")
// console.log(ret)


// const users=[
//     {name : "A", age: 20},
//     {name : "B", age: 17},
//     {name : "C", age: 25},
// ]   

// let ret=users.filter( users => users.age>18).map(users => users.name)
// console.log(ret);

// let arr=[1,2,3,4,5]
// let ret=arr.map(item=>item*3).filter(item=>item%2==0).reduce((a,b)=>a+b,0)
// console.log(ret);

// let arr=["apple","banana","kiwi","grape"]
// let ret=arr.filter(item=>item.length>4).map(item=>item.toUpperCase()).reduce((prev,curr)=>prev+curr,"")
// console.log(ret);

// const trans = [
//  { type: "credit", amount: 100 },
//  { type: "debit", amount: 50 },
//  { type: "credit", amount: 200 },
//  { type: "debit", amount: 30 }
// ];
// let ret=trans.filter(item=>item.type =="credit").reduce((prev,trans)=>prev+trans.amount,0)
// console.log(ret);








//// recursion practice......
// function print(n)
// {
//     if(n==0)
//     {
//         return 0
//     }
//     console.log(n); 
//     print(n-1)
  
// }
// print(5)

// function print(i,n,str="")
// {
//     if(i==n)
//     {
//         str+= "* "
//         console.log(str);
//         return
//     }
//     str+= "* "
//     console.log(str);
//     print(i+1,n,str) 
// }
// print(1,5)

// function print(x,y,str="")
// {
//     if(x>y)
//     {
//         return str
//     }
//     str+=x+" "
//     return print(x+1,y,str)
// }
// console.log(print(5,8));

// function print(i,n,)
// {
//     if(i>n){
//         return
//     }
//     console.log("ACCIOJOB");
//     print(i+1,n) 
// }
// print(1,3)

// function print(x,y)
// {
//     if(y==0)
//     {
//         return 1
//     }
//     return x * print(x,y-1)
// }
// console.log(print(2,3));

// function print(n)
// {
//     if(n==1)
//     {
//         return n
//     }
//     return n* print(n-1)
// }
// console.log(print(5));

// function print(n)
// {
//     if(n==1)return 0
//     if(n==2)return 1
//     return print(n-1) + print (n-2)
// }
// console.log(print(5));

// function even(n)
// {
//     if(n==1)return 1
//     if(n==2)return 1
//     return even(n-1) + even(n-2)
// }
// console.log(even(1*3));

// let arr=[1,2,3,4,5]
// function print(arr)
// {
//     if(arr.length==0)
//     {
//         return 0
//     }
//     let ele=arr.pop()
//     return ele + print(arr)
// }
// console.log(print(arr));

// let arr=[4,5,2,-90,99,0,-100]
// function min(arr,i,n)
// {
//     if(i==n-1)
//     {
//       return arr[i]
//     }
//     return Math.min(arr,i,n), min(arr,i+1,n)
// }
// console.log(min(arr,0,7));

// let num=1256
// function sum(num)
// {
//   if(num==0)
//   {
//     return 0
//   }
//   ld=num%10
//   num=Math.floor(num/10)
//   return ld + sum(num)
// }
// console.log(sum(num));

// let str="abbac"
// function pali(str,s,e)
// {
//   if(s>=e)
//   {
//     return true
//   }
//   if(str[s] != str[e])
//   {
//     return false
//   }
//   return pali(str,s+1,e-1)
// }
// console.log(pali(str,0,str.length-1));

// let n=5
// for(let i=1;i>=n;i++)
// {
//     let str =""
//     for(let j=i;j>=n;j++)
//     {
//         str+=""
//     }
//     for(let k=n;k<=1;k--)
//     {
//         str+= "k"
//     }

// }

// for(let i=n;i>=1;i--)
// {
//     let str=""
//     for(let j=1;j<n;j++)
//     {
//         str+=""
//     }
//     for(let k=n;k<=i;k--)
//     {
//         str+="n"
//     }
// }
// console.log(str);


// let arr=[
//     [1,2,3,4],
//     [4,7,3,6]
// ]
// let smallest= Infinity
// for(let item of arr){
//     for(let val of item)
//     {
//         if(val<smallest)
//         {
//             smallest=val
//         }
//     }
    
// }
// console.log(smallest);

// 5 4 3 2 1
//   5 4 3 2
//     5 4 3
//       5 4
//         5
//       5 4 
//     5 4 3  
//   5 4 3 2
// 5 4 3 2 1

// let n = 5
// let totalRows = 2 * n - 1

// for (let i = 1; i <= totalRows; i++) {

//     let line = ""
    
//     // decide value of k (controls numbers)
//     let k = i <= n ? i : totalRows - i + 1

//     // spaces
//     for (let s = 1; s < k; s++) {
//         line += "   "
//     }

//     // numbers
//     for (let j = n; j >= k; j--) {
//         line += j + " "
//     }

//     console.log(line)
// }




// let str = "abc"

// function Subsequences(str,i,ans)
// {
    

//     if(i == str.length)
//     {
//         console.log(ans)
//         return
//     }


//     Subsequences(str,i+1,ans+str[i])
//     Subsequences(str,i+1,ans)


// }

// Subsequences(str,0,"")



// let arr = [1,2,3]

// function subsequence(arr,i,ans)
// {
//     if(i == arr.length)
//     {
//         console.log(ans);
//         return
//     }

//     ans.push(arr[i])
//     subsequence(arr,i+1,ans)


//     ans.pop()
//     subsequence(arr,i+1,ans)


// }

// subsequence(arr,0,[])


// let arr = [2,5,1,4,8,6,3]

// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j+1]) 
//         {
//             [arr[j], arr[j+1]] = [arr[j+1], arr[j]] 
//         }
//     }
// }

// console.log(arr)

// // pattern 
// let n=5
// let space=n-1
// let star=1
// for(let i=1;i<=n;i++)
// {
//     let str=""
//     for(let j=1;j<=space;j++)
//     {
//         str+="  "
//     }
//     for(let k=1;k<=star;k++)
//     {
//         str+="* "
//     }
//     console.log(str)
//     star+=2
//     space--
// }












