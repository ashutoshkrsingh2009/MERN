// const input=document.getElementById("gs")
// function inputhandler()
// {
//     console.log("api called...");
    
// }
// input.addEventListener("input",inputhandler)

// step 2

// const input=document.getElementById("gs")
// function inputhandler()
// {
//     setTimeout(()=>{
//         console.log("Api called...");
        
//     },2000)
    
// }
// input.addEventListener("input",inputhandler)

// step3

// const input=document.getElementById("gs")

// let id;
// function inputhandler()
// {   clearTimeout(id)
//     id=setTimeout(()=>{
//         console.log("Api called...");
        
//     },2000)
    
// }
// input.addEventListener("input",inputhandler)

// step4

// const input=document.getElementById("gs")

// let id;
// function inputhandler(e)
// {   clearTimeout(id)
//     id=setTimeout(()=>{
//         console.log(`api called for query : ${e.target.value}`);
        
//     },2000)
    
// }
// input.addEventListener("input",inputhandler)


// make debounce function

const input=document.getElementById("gs")

let id;
function debounce(fn,delay)
{   
    let id;

    return function(e)
    {
    clearTimeout(id)
    if(e.target.value=="")return
    id=setTimeout(()=>{
    fn(e)  
    },delay)
    }  
}
const debounceHandler=debounce((e)=> console.log(`Api called for queary : ${e.target.value}`),2000)
input.addEventListener("input",debounceHandler)

