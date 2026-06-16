// -----nested in object------//



// const obj={
//     name:"abc",
//     age:34,
//     isPresent:true,
//     sayHi : ()=>{
//         console.log("hello world"); 
//     },
//     address:{
//         city:"delhi",
//         country:"india",
//     }
// }
// console.log(obj.age);
// obj.sayHi()
// console.log(obj.address.city,obj.address.country)
// console.log(typeof obj);

//--------------hasOwnProperty---------//



// const obj={
//     name:'ASHU',
//     age:22,
//     isPresent:true
// }
// console.log(obj.hasOwnProperty("xyz"));
// console.log(obj.hasOwnProperty("address"));

// if(!obj.hasOwnProperty("designation"))
// {
//     obj.designation="software developer"
// }
// console.log(obj);


//-------question for mock--------//



// let arr=[0,-1,-2,4,0,-3,7,0]

// function solve(arr)
// {
//     let positive=0
//     let negative=0
//     let zero=0

//     for(let item of arr)
//         if(item>0)
//         {
//             positive++
//         }
//         else if(item<0)
//         {
//             negative++
//         }
//         else if(item==0)
//         {
//             zero++
//         }
//         return {zero,positive,negative}
        
// }
// let ans=solve(arr)
// console.log(ans);

//-----both is same -------//

// let arr=[1,-2,0,3,-10,]
// function solve(arr)
// {
//    let zero=0
//    let positive=0
//    let negative=0
//    for(let item of arr)
//    {
//     if(item==0)
//         zero++
//     if(item>0)
//         positive++
//     if(item<0)
//         negative++
//    }
//    return[zero,positive,negative]
// }
// console.log(solve(arr));

//-----to check given string is either lowercase or uppercase------//
// FIRST WAY 

// let str="J"
// if(str>="A" && str<="Z")
// {
//     console.log("uppercase");
// }
// else if(str>="a" && str<="z")
// {
//     console.log("lowercase");
// }


// SECOND WAY

// let str="T"

// if(str.toLowerCase()==str)
// {
//     console.log("lowercase");  
// }
// else if(str.toUpperCase()==str)
// {
//     console.log("uppercase");
// }

// let str="abcABCE"
// function solve(str)
// {
//     let uppercase=0
//     let lowercase=0

//     for(let item of str)
//     {
//         if(item>="A" && item<="Z")
//         {
//             uppercase++
//         }
//         else if(item>="a" && item<="z")
//         {
//             lowercase++
//         }
//     }
//     return{lowercase,uppercase}

// }
// let ans=solve(str)
// console.log(ans);











// let str="abcdabc"

// let ans = {} 

// for(let item of str) 

// { 
//     if(ans.hasOwnProperty(item)) 
//     { 
//         ans[item] = ans[item] + 1 
//     } 
//     else 
//     { 
//         ans[item] = 1 
//     } 
// } 
// console.log(ans) 



// const obj={
//     name:"ashu",
//     age:23    
// }
// console.log(obj);

// obj.city="delhi"
// obj["country"]="india"

// console.log(obj);





// const obj={
//     name:"ashu",
//     age:23    
// }
// Object.preventExtensions(obj)

// obj.city="delhi"
// obj["country"]="india"
// obj.delete.age

// console.log(obj);

// const obj={
//     name:"ashu"
// }


//------revision of class by own------//


// let obj={
//     name:"ashu",
//     age:21,
//     ispresent:true,
//     sayHii:function()
//     {
//         console.log("hello " + this.name);
//     },
//     address:{
//         city:"delhi",
//         country:"india"
//     }
// }
// // // console.log(obj);
// // // console.log(obj.address);
// // // console.log(obj.address.city,obj.address.country);
// // obj.sayHii()
// console.log(typeof obj);



