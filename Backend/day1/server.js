function sayHi()
{
    console.log("Hello world");  
}

function sayHi2()
{
    console.log("hello function2");
    
}

// this is default
// module.exports=sayHi
// module.exports=sayHi2

// this is named
module.exports={
    sayHi,sayHi2
}


console.log("ok");
