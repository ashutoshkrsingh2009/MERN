// const redux=require("redux")

const fs=require("fs")

//------------ how to create file using fs module ---------//

// by using async create file 

// fs.writeFile("dummy.txt","My Name Is Ashu.",()=>{
//     console.log("text written inside dummy file sucessfully");
    
// })

// console.log("ok");

//  by usng async create file

// fs.writeFileSync("dummy2.txt","my age is 24.")



//------------ how to read file using fs module ---------//

// by using async

// fs.readFile("dummy.txt","utf-8",(err,data)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log(data);  
//     }
// })

// console.log("ok");

// by using sync

// const val=fs.readFileSync("dummy2.txt","utf-8")
// console.log(val);


//------------ how to update file data using fs module ---------//

// by using async

// fs.appendFile("dummy.txt","\nMy Father Name Is Sanjeev Singh.",()=>{
//     console.log("text added sucessfully");
// })

// console.log("ok");

// by using sync

// fs.appendFileSync("dummy2.txt","\nMy Father Age Is 52.")

//------------ how to delete file using fs module ---------//

//  to delete file we will use 
// fs.unlink("dummy.txt",()=>{

// })


//  again creatng because previous  delete command deleted it.

// fs.writeFile("dummy.txt","My Name Is Ashu.",()=>{
//     console.log("text written inside dummy file sucessfully");
    
// })

//------------ how to rename file using fs module ---------//
// fs.rename("dummy.txt","data.txt",()=>{

// })


//------------ how to create folder using fs module ---------//
// fs.mkdir("demo",()=>{
//     console.log("ok"); 
// })

//------------ how to delete folder using fs module ---------//
// fs.rmdir("demo",()=>{
//     console.log("folder deleted");
    
// })










