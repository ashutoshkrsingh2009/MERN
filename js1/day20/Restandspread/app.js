//----------------REST PARAMETER--------------------

// function sum(...nums)
// { 
//     let sum=0
//     for(let item of nums)
//     {
//         sum+=item
//     }
//     console.log(sum);
// }
// sum()

// both are same ... sum of array using rest operator or parameter

// function sum(...nums)
// {   let sum=0
//     for(let item of nums)
//     {
//        sum+=item
//     }
//     console.log(sum); 
// }
// sum(1,2,3,4,5)



//---------TELL POSITION

// function tellposition(first,second,third,...extras)
// {
//     console.log(`${first}:first`);
//     console.log(`${second}:second`);
//     console.log(`${third}:third`);
//     console.log(`${extras}:extras`);
// }
// tellposition("ashu","ram","som","ak","aks","mk")





// function tellposition(first,second,third)
// {
//     console.log(`first is ${first}`);
//     console.log(`second is ${second}`);
//     console.log(`third is ${third}`);
// }
// tellposition("Ashu","rahul","mohit",)



// function tellposition(first,second,third,...extras)
// {
//     console.log(`first is ${first}`);
//     console.log(`second is ${second}`);
//     console.log(`third is ${third}`);
//     //console.log(`forth is ${extras}`);
//    extras.length>0 && console.log(`forth is ${extras}`);
    
// }
// tellposition("Ashu","rahul","mohit","rohit","sohan","mohan")


////----------find even or odd without using conditional-----------------

// let n=26
// let arr=["even","odd"]
// console.log(arr[n%2]);



////--------------destructurng an array----------------

// let arr=[1,2,3]
// const[a,b,c]=arr
// console.log(a,b,c);

// same using restparmeter-------//

// let arr=[1,2,3,4,5,6,7,8]
// const[a,b,c,...extras]=arr
// console.log(a,b,c);      // we can do this also
// console.log(a,b,c,extras);   // we can do this also
// console.log(extras);  // we can do this also



//------------------DESTRUCTURING AN OBJECT-------------------//

// let obj={
//     name:"ashu",
//     age:21,
//     city:"asansol"

// }
// //// access full obj by 
// console.log(obj);

// //// to access obj we have two way
// console.log(obj.name,obj.age,obj.city);
// console.log(obj["name"],obj["age"],obj["city"]);

// //// we can also destructure an object
// // const{name,age,city}=obj  //// here we destructure
// // console.log(name,age,city);

// //// now we can also rename key
// const{name:naam,age:umar,city:sehar}=obj 
// console.log(naam,umar,sehar);

// ////------------we can also destructure obj using rest parameter
// const{name,...something}=obj
// console.log(name);
// console.log(something);



//////----------both are same -----------//////

// let obj={
//     name:"ashu",
//     age:22,
//     city:"goa"
// }
// // console.log(obj);
// // console.log(obj.name, obj.age, obj.city);
// // console.log(obj["name"],obj["age"],obj["city"]);



// const {name:naam,age:umar,city:sehar}=obj;
// console.log(naam,umar,sehar);





//----------------spread operator-------------

// let arr=[1,2,3,4,5,6]
// console.log(arr);
// console.log(...arr);

////-----------------concatination of two array------------------

// let arr1=[1,2,3,4,5]
// let arr2=[6,7,8,9,10]

// console.log(arr1.concat(arr2));
//   //  or
// let ans=arr1.concat(arr2)
// console.log(ans)

//// ---------------now concat using spread operator----------------

// let arr1=[1,2,3,4,5]
// let arr2=[11,22,33,44,55]

// console.log([...arr2,...arr1])
// let ans=[...arr1, ...arr2]
// console.log(ans);

//--------------spread operator in object-------------

// let obj1={
//     name:"xyz",
//     age:21,
//     city:"delhi"
// }

// let obj2={
//     adress:"asansol",
//     country:"india",
//     car:"bmw",

// }

// let obj3={
//     ...obj1,
//     ...obj2,
//     colour:"red",  //// we can also add extra key value
//     language:"js",
// }
// console.log(obj3);

////---------if we want to make copy ----------------
// let obj1={
//     name:"xyz",
//     age:21,
//     city:"delhi"
// }
// let copy={
//     ...obj1
// }
// console.log(copy);





