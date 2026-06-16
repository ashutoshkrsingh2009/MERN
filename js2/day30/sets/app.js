//// SYNTAX OF SET
// const mySet= new Set()
// console.log(mySet);

// const myset= new Set()
// myset.add(1)
// myset.add(2)
// myset.add(3)
// myset.add(4)
// myset.add(5)
// myset.add("ashu")
// myset.add("ashu")
// myset.add(5)  ///// this will not add because in set duplicate value is not added
// console.log(myset);
// console.log(typeof myset);


// let arr=[11,12,13,14,15,11,12,13,11,12,11]
// const myset=new Set(arr)
// myset.delete(15)
// myset.add(19)
// // myset.clear()
// console.log(myset); 
//// here ouput in object form we can also transfer in array form

// let arr2=Array.from(myset)
// console.log(arr2);


////---------entries----------

// let arr=[11,12,13,14,15,11,12,13,11,12,11]
// const myset=new Set(arr)
// myset.entries()  //// this is giving no output because we have not store in variable to see output we have to store in variable
// let abc=myset.entries()
// // console.log(abc);
// // console.log(myset);
// //// now we can also do loop on abc that is entries() return
// for(let item of abc)
// {
//     console.log(item);
    
// }  ///// there is also another way to do loop on set by using forEach

// let arr=[1,2,3,4,5,6]
// const myset= new Set(arr)
// myset.forEach((item)=>{
//     console.log(item);
// })

//// we can also do loop like this

// let arr=[1,2,3,4,5,6,7]
// const myset= new Set(arr)
// for(let item of myset)
// {
//     console.log(item); 
// }


// //// given an array return new array and remove duplicate elements and return array only
// let arr=[1,2,2,3,4,4]
// const myset= new Set(arr)
// let arr2=Array.from(myset)
// console.log(arr2);


//// check if array has duplicates

// let arr=[1,2,3]
// let myset= new Set(arr)
// if(arr.length== myset.size)
// {
//     console.log("no duplicate");
// }
// else
// {
//     console.log("duplicate found");
// }

// let arr1=[1,2,2,1]
// let arr2=[2,2]
// let set= new Set(arr1)
// let ansset= new Set()

// for(let item of arr2)
// {
//     if(set.has(item))
//     {
//         ansset.add(item)
//     }
// }
// console.log(Array.from(ansset));


// let arr1=[1,2]
// let arr2=[2,3]
// let ansset=new Set([...arr1,...arr2])
// console.log(ansset);


// let arr1=[1,2,3]
// let arr2=[2,3]
// let set= new Set(arr1)
// for(let item of arr2)
// {
//     if(set.has(item))
//     {
//         set.delete(item)
//     }
// }
// console.log(Array.from(set));

// let arr1=[1,2,3]
// let arr2=[2,3,4]
// let set= new Set(arr1)
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


