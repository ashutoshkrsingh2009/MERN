const button=document.getElementById("btn")
const input=document.getElementById("ip")

function throttle (fn,delay)
{
    let last=0;
    return function(e)
    {
        let now=Date.now()
        if(now-last <=delay)
        {
            return
        }
        last=now
        fn(e)
    }
}

let throttleHandler=throttle(()=>console.log("ok"),2000)
let throttleipHandler=throttle((e)=>console.log(`api called for :${e.target.value}`),2000)

button.addEventListener("click",throttleHandler)
input.addEventListener("input",throttleipHandler)