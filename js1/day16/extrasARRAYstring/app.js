// destructring in arrays

// let arr=[1,2,3,4,5,6,7]
// console.log(arr[0]);
// console.log(arr[1]);

// const[a,b,c,d,e]=arr
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// nested arrays
// let arr=[1,2,3,[4,5,6,[7,8,9,10,[11,12,13,"ANS"]]]]
// console.log(arr); console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[3]);
// console.log(arr[3][0]);
// console.log(arr[3][1]);
// console.log(arr[3][2]);
// console.log(arr[3][3]);
// console.log(arr[3][3][0]);
// console.log(arr[3][3][1]);
// console.log(arr[3][3][2]);
// console.log(arr[3][3][3]);
// console.log(arr[3][3][4]);
// console.log(arr[3][3][4][0]);
// console.log(arr[3][3][4][1]);
// console.log(arr[3][3][4][2]);
// console.log(arr[3][3][4][3]);



// let innerArr=arr[3]
// console.log(innerArr[3])
// console.log(arr[3][3]);
// console.log(arr[3][3][4][3]);

// flat method in array

// let arr=[1,2,3,[4,5,6,[7,8,9,10,[11,12,13,"ANS"]]]]
// let flattenedarr=arr.flat(Infinity)
// console.log(flattenedarr);

// // string method


// let str="qwertyuiop"

// console.log(str.charAt(12));
// console.log(str[2]);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.concat("ajshjhajhd"));
// console.log(str + "yhdshhdhdhdhdh");
// console.log();





// let email="xyz@gmail.com"




// let text="hello ji"

// console.log(text.repeat(1));
// console.log(text.padEnd(13,"q"));
// console.log(text.padStart(20,"e"));
// console.log(text.trim().length);
// console.log(text.replace("l" ,"y"));
// console.log(text.replaceAll("l" ,"o"));
// console.log(text.trimEnd());
// console.log(text.trimStart());
// console.log(text.trimStart());

// charAt method

// let str='ashu'
// console.log(str.charAt(0));
// console.log(str.charAt(1));
// console.log(str.charAt(2));
// console.log(str.charAt(3));

// touppercase

// let str='ashu'
// console.log(str);
// console.log(str.toUpperCase());

//-------tolowercase-------//

// let str='ASHU'
// console.log(str);
// console.log(str.toLowerCase());

//--------concat method-------//

// let str="ashu"
// console.log(str.concat(" singh"));

//--------endWith--------//

// let str="ashu"
// console.log(str.endsWith("u"));
//  let email="aks@gmail.com"
//  console.log(email.endsWith("com"));

//---------startWith---------//

// let str='aksako'
// console.log(str.startsWith("a"));

// let str="ashutoshkrsingh"
// console.log(str.indexOf("k"));



 
//----------OBJECT---------//

// let obj={
//     name:"ashu",
//     age:24,
//     isPresent:true,
// }
// // console.log(obj);
// // console.log(obj.name,obj.isPresent,obj.age);
// console.log(obj['name']);

//-------updating object with new value-------//

// let obj={
//     name:"ashuosh",
//     age: 21
// }
// obj.age=23
// console.log(obj);

//-------adding new key value---------//

// let obj={
//      name:"ashu",
//      age:23,
// }
// obj.city="delhi"
// console.log(obj);


// ------loop that is for-in-loop--------//


// let obj={
//     name:"ashutosh",
//     age:21
// }
// for(let key in obj)
// {
//     console.log(key); 
// }
// by doing this we can only access key but not value ....


// by doing this we can access value of key

// let obj={
//     name:"ashutoshkrsingh",
//     age:21,
// }
// for(let value in obj)
// {
//     console.log(obj[value]);  //[in this way only we can access value]
// }



// --------delete any key value in obj-------//

// let obj={
//     name:"asheeu",
//     age:21,
//     ispresent:true
// }
// delete obj.ispresent
// console.log(obj);

//-----when a funcion nside obj--------//

// let obj={
//     name:"ashu",
//     age:21,
//     sayHii:function()
//     {
//         console.log("hello ashu");
//     }
// }
// console.log(obj);
// obj.sayHii()

// let obj={
//     name:"ashu",
//     age:21,
//     sayHi:function()
//     {
//         console.log("hello" + obj.name);
//         console.log("hello" + this.name);
//     }
// }
// console.log(obj);
// obj.sayHi()





















